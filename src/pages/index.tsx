import React from "react";
import Header from "../components/header/";
const IndexPage = () => {
  const mockHeaderItems = [
    {
      name: "Partio-Ohjelma",
      subMenu: [
        {
          name: "Sudenpennut",
          ingress: "7-9 vuotiaat",
          url: "/sudenpennut",
        },
        {
          name: "Seikkailijat",
          ingress: "10-12 vuotiaat",
          url: "/seikkailijat",
        },
        {
          name: "Tarpojat",
          ingress: "15-17 vuotiaat",
          url: "/tarpojat",
        },
        {
          name: "Samoajat",
          ingress: "15-17 vuotiaat",
          url: "/samoajat",
        },
        {
          name: "Vaeltajat",
          ingress: "18-22 vuotiaat",
          url: "/vaeltajat",
        },
        {
          name: "Perhepartio",
          ingress: "Lorem ipsum dolor",
          url: "/perhepartio",
        },
      ],
    },
    {
      name: "Ajankohtaista",
    },
    {
      name: "Kampanjat",
    },
    {
      name: "Materiaalit",
    },
    {
      name: "Partiokasvatus",
    },
  ];

  return <Header headerItems={mockHeaderItems} />;
};

export default IndexPage;
