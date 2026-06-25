import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3002';
    const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || 'http://localhost:3001';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const res = await fetch(`${BACKEND_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.message);
            } else {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userName', data.name);
                window.location.href = DASHBOARD_URL;
            }
        } catch (err) {
            setError('Could not connect to server. Make sure the backend is running.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Top Banner — same as Signup */}
            <div className='container p-5 mb-2 text-center'>
                <h1 className='mt-5'>Login to your account</h1>
                <p className='mt-3'>
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                </p>
            </div>

            {/* Login Form — same card style as Signup */}
            <div className='container mb-5' style={{ maxWidth: '460px' }}>
                <div style={{
                    border: '1px solid #e0e0e0',
                    borderRadius: '4px',
                    padding: '40px 40px',
                    backgroundColor: '#fff',
                }}>
                    {error && (
                        <div style={{
                            backgroundColor: '#fff0f0',
                            border: '1px solid #ffcccc',
                            color: '#cc0000',
                            borderRadius: '4px',
                            padding: '10px 14px',
                            marginBottom: '20px',
                            fontSize: '13px',
                        }}>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        {/* Email */}
                        <div className='mb-4'>
                            <input
                                type='email'
                                name='email'
                                className='form-control form-control-lg'
                                placeholder='Your email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{ borderRadius: '3px', fontSize: '15px' }}
                            />
                        </div>

                        {/* Password */}
                        <div className='mb-4'>
                            <input
                                type='password'
                                name='password'
                                className='form-control form-control-lg'
                                placeholder='Your password'
                                value={formData.password}
                                onChange={handleChange}
                                required
                                style={{ borderRadius: '3px', fontSize: '15px' }}
                            />
                        </div>

                        {/* Submit */}
                        <div className='text-center mt-2'>
                            <button
                                type='submit'
                                className='btn btn-primary p-2'
                                style={{ width: '100%', borderRadius: '3px', fontSize: '15px', fontWeight: '600' }}
                                disabled={loading}
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                        </div>
                    </form>

                    <p className='text-center mt-4 mb-0' style={{ fontSize: '13px', color: '#666' }}>
                        Don't have an account?{' '}
                        <Link to='/signup' style={{ color: '#387ed1', fontWeight: '600', textDecoration: 'none' }}>
                            Sign up for free
                        </Link>
                    </p>
                </div>

                {/* Footer note — same as Signup */}
                <p className='text-center mt-4' style={{ fontSize: '12px', color: '#999', lineHeight: '1.8' }}>
                    By continuing, I agree to the{' '}
                    <a href='/' style={{ color: '#387ed1', textDecoration: 'none' }}>Terms & Conditions</a>
                    {' '}and{' '}
                    <a href='/' style={{ color: '#387ed1', textDecoration: 'none' }}>Privacy Policy</a>
                </p>
            </div>
        </>
    );
}

export default Login;
