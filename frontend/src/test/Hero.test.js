import React from "react";
import {render,screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import Hero from "../landing_page/home/Hero"

describe('Hero Component', () => {
  test('should render hero Image', () => {
    render(<Hero/>);
    const heroImage = screen.getByAltText("Home Hero");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src",'media/images/homeHero.png')
  });
  
})
