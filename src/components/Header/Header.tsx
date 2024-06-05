import React from "react";

import { Link } from "react-router-dom";
import Container from "../../components/Container";
// import { ModeToggle } from '../../components/ui/mode-toggle'
import { Button } from "../../components/ui/button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../../components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";

import AviaraLogoFull from "../../assets/AviaraLogoDarkGrey.jpg";
import AviaraLogo from "../../assets/aviaraLogo.png";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  // {
  //   name: "Staff",
  //   path: "/staff",
  // },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Careers",
    path: "/careers",
  },
];

const services = [
  {
    name: "Hair Services",
    path: "/services/hair",
  },
  {
    name: "Facial Services",
    path: "/services/facial",
  },
  {
    name: "Massage Services",
    path: "/services/massage",
  },
  {
    name: "Waxing Services",
    path: "/services/waxing",
  },
  {
    name: "Nail Services",
    path: "/services/nails",
  },
  {
    name: "Weddings/Special Events",
    path: "/services/events",
  },
];

import "./Header.css";

const Header = () => {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <nav className="navbar items-center sm:flex  sm:justify-between md:flex flex-col w-full">
          <div className="flex items-center w-auto">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-8 md:hidden w-8" />
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col items-center">
                <Link to="/" className="ml-4 lg:ml-0 py-10">
                  <img src={AviaraLogo} />
                </Link>

                {routes.map((route, index) => {
                  if (route.name === "Services") {
                    return (
                      <React.Fragment key={index}>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <Button
                              variant="ghost"
                              className="text-xl font-medium transition-colors"
                            >
                              {route.name}
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="center">
                            <DropdownMenuItem className="cursor-pointer">
                              <Link
                                to={route.path}
                                key={index}
                                className="text-lg font-medium transition-colors"
                              >
                                {route.name}
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {services.map((route, index) => (
                              <DropdownMenuItem className="cursor-pointer">
                                <Link
                                  to={route.path}
                                  key={index}
                                  className="text-lg font-medium transition-colors"
                                >
                                  {route.name}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </React.Fragment>
                    );
                  }
                  return (
                    <Button asChild variant="ghost" key={index}>
                      <Link
                        to={route.path}
                        key={index}
                        className="text-xl font-medium transition-colors"
                      >
                        {route.name}
                      </Link>
                    </Button>
                  );
                })}
              </SheetContent>
            </Sheet>
            <img
              // src={AviaraLogoFull}
              // className=" h-30 md:h-48 pb-10 px-6"
              src={AviaraLogo}
              className="h-56 md:h-64 pb-10 px-6"
            />
          </div>
          {/* <div className="navbar-logo-container md:ml-6">
                    <Link to="/" className="navbar-logo">
                    <img src={AviaraLogo} alt="Aviara Logo" className="navbar-logo-img" />
                    </Link>
                </div> */}
          {/* <div className="navbar-links md:flex md:justify-end hidden mr-6"> */}
          <div className="navbar-links md:flex md:justify-center hidden mr-6">
            {routes.map((route, index) => {
              if (route.name === "Services") {
                return (
                  <React.Fragment key={index}>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button variant="ghost">{route.name}</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="center">
                        <DropdownMenuItem className="cursor-pointer">
                          <Link
                            to={route.path}
                            key={index}
                            className="text-sm font-medium transition-colors"
                          >
                            {route.name}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {services.map((route, index) => (
                          <DropdownMenuItem className="cursor-pointer">
                            <Link
                              to={route.path}
                              key={index}
                              className="text-sm font-medium transition-colors"
                            >
                              {route.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </React.Fragment>
                );
              }
              return (
                <Button asChild variant="ghost" key={index}>
                  <Link
                    to={route.path}
                    className="text-sm font-medium transition-colors"
                  >
                    {route.name}
                  </Link>
                </Button>
              );
            })}
            {/* <ModeToggle />  */}
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
