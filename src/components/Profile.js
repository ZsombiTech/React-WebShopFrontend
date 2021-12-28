import React from "react";

export default function Profile() {
  return (
    <div>
      <div className="mt-10 text-center text-3xl font-extrabold text-gray-900 mb-13">
        <h1>Profil</h1>
      </div>

      <div className="ml-13 flex-column lg:ml-22">
        <table className="table-auto">
          <tbody>
            <tr>
              <td>
                <p className="text-1xl font-extrabold text-gray-900 mr-10 mb-10">
                  Nev
                </p>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="John Bill"
                  className="shadow appearance-none border rounded w-17 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-10"
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-1xl font-extrabold text-gray-900 mr-10 mb-10">
                  Email
                </p>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="lol.zsombi@gmail.com"
                  className="shadow appearance-none border rounded w-17 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-10"
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-1xl font-extrabold text-gray-900 mr-10 mb-10">
                  Jelszo
                </p>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="*****"
                  className="shadow appearance-none border rounded w-17 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-10"
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-1xl font-extrabold text-gray-900 mr-10 mb-13">
                  Jelszo
                </p>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="*****"
                  className="shadow appearance-none border rounded w-17 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-13"
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-2xl font-extrabold text-gray-900 mr-10 mb-10">
                  Szallitas
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-1xl font-extrabold text-gray-900 mr-10 mb-10">
                  Cim
                </p>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Zena utca 43."
                  className="shadow appearance-none border rounded w-17 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-10"
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-1xl font-extrabold text-gray-900 mr-10 mb-10">
                  Varos
                </p>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Budapest"
                  className="shadow appearance-none border rounded w-17 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-10"
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-1xl font-extrabold text-gray-900 mr-10 mb-12">
                  Iranyitoszam
                </p>
              </td>
              <td>
                <input
                  type="number"
                  placeholder="1654"
                  className="shadow appearance-none border rounded w-17 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-12"
                  disabled
                />
              </td>
            </tr>
            <tr>
              <button className="mb-13 px-33 py-33 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-lg md:px-8">
                Update profile
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
