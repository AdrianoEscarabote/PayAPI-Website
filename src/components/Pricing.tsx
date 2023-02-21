import { PricingStyled } from "../styles/Pricing"
import iconCheck from "../assets/shared/desktop/icon-check.svg";
import { useEffect } from "react";
import { ObjectFlags } from "typescript";
import { ReadyToStart } from "./shared/ReadyToStart";

interface Data {
  name: string,
  description: string,
  price: string,
  itemList: [
    {Transactions: boolean},
    {Auth: boolean},
    {Indentity: boolean},
    {Investiments: boolean},
    {Assets: boolean},
    {Liabilities: boolean},
    {Income: boolean},
  ]
}

const dataPricing: Data[] = [
  {
    name: "Free Plan",
    description: "Build and test using our core set of products with up to 100 API requests",
    price: "$0.00",
    itemList: [
      {Transactions: true},
      {Auth: true},
      {Indentity: true},
      {Investiments: false},
      {Assets: false},
      {Liabilities: false},
      {Income: false},
    ]
  },
  {
    name: "Basic Plan",
    description: "Launch your project with unlimited requests and no contractual minimums",
    price: "$249.00",
    itemList: [
      {Transactions: true},
      {Auth: true},
      {Indentity: true},
      {Investiments: true},
      {Assets: true},
      {Liabilities: false},
      {Income: false},
    ]
  },
  {
    name: "Premium Plan",
    description: "Get tailored solutions, volume pricing, and dedicated support for your team",
    price: "$499.00",
    itemList: [
      {Transactions: true},
      {Auth: true},
      {Indentity: true},
      {Investiments: true},
      {Assets: true},
      {Liabilities: true},
      {Income: true},
    ]
  },
]

export const Pricing = () => {

  useEffect(() => {
    dataPricing.forEach(element => {
      element.itemList.forEach(element => {
        console.log(Object.keys(element))
      })
    })
  }, [])

  return (
    <PricingStyled>
      <div className="container">
        <h1>Pricing</h1>
        <div className="background"></div>
        <section className="grid-items">
          <>
            {
              dataPricing.map((element, index) => (
                <div className={`col${index + 1}`} key={index}>
                  <div className="text">
                    <h2>{element.name}</h2>
                    <p>{element.description}</p>
                    <h3>{element.price}</h3>
                  </div>

                  <ul>
                    {element.itemList.map((item, index) => {
                      const [key, value] = Object.entries(item)[0];
                      const isInclude = value === true;
                      const itemClass = isInclude ? "includes" : "disabled";

                      return (
                        <li key={index} className={itemClass}>
                          {
                            isInclude ? (
                              <>
                                <img src={iconCheck} aria-hidden="true" alt="" />
                                <p>{key}</p>
                              </> 
                            ) : (
                              <p>{key}</p>
                            )
                          }
                        </li>
                      )
                    })}
                  </ul>
                  <a href="">Request Access</a>
                </div>
              ))
            }
          </>
        </section>
        <ReadyToStart />
      </div>
    </PricingStyled>
  )
}