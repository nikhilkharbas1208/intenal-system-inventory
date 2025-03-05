import React from "react";
import PropTypes from "prop-types";
import FooterComponent from "../FooterComponent/FooterComponent";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import MainComponent from "../MainComponent/MainComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "../PageNotFoundComponent/PageNotFound";
import AddInventoryComponent from "../AddInventoryComponent/AddInventoryComponent";
import TicketComponent from "../TicketComponent/TicketComponent";

const HomeComponent = () => (
  <div data-testid="HomeComponent">
    <BrowserRouter>
      <HeaderComponent></HeaderComponent>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/ticket" element={<TicketComponent />} />
        <Route path="/addinventory" element={<AddInventoryComponent />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <FooterComponent></FooterComponent>
    </BrowserRouter>
  </div>
);

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;
