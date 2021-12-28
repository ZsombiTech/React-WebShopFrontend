import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PayDeliver() {
  const [checked, setChecked] = React.useState(true);
  return (
    <div className="mt-10 sm:mt-0 m-14">
      <div className="mt-10">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center mb-10">
          Fizetés és Szállítás
        </h1>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="mb-20 block text-sm font-medium text-gray-700"
                  >
                    Fizetési mód kiválasztása
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="mb-20 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Bankkártya</option>
                    <option>Paypal</option>
                    <option>Utánvétel</option>
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="mb-20 block text-sm font-medium text-gray-700"
                  >
                    Szállítási mód kiválasztása
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="mb-20 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Express</option>
                    <option>Lassú</option>
                    <option>Méglasabb</option>
                  </select>
                </div>
                <div className="ml-21 col-span-5 flex flex-row">
                  <div className="ml-3 text-sm mr-10">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-700"
                    >
                      A szállítási cím megegyezik a lakhellyel
                    </label>
                  </div>
                  <input
                    id="deliverycheckec"
                    name="deliverycheckec"
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    defaultChecked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                </div>
                <div className="col-span-6">
                  {!checked && (
                    <div>
                      <div>
                        <label
                          htmlFor="street-address"
                          className="mb-20 block text-sm font-medium text-gray-700"
                        >
                          Cím
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mb-20 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="city"
                          className="mb-20 block text-sm font-medium text-gray-700"
                        >
                          Város
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          className="mb-20 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="postal-code"
                          className="mb-20 block text-sm font-medium text-gray-700"
                        >
                          Irányítószám
                        </label>
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <Link to="/checkoutform">
                <button
                  type="submit"
                  className="mr-10 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-indigo-600 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Vissza
                </button>
              </Link>

              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Megrendelés
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
