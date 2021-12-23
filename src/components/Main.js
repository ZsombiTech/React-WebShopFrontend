import kep from "../images/fishing.jfif";

export default function Landing() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-2 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-14 lg:mt-20 lg:px-1 xl:mt-16">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Magyarország legjobb</span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  horgászáruháza
                </span>
              </h1>
              <p className="mt-3 mb-10 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Országszerte kiszállítunk mindenféle horgászathoz és halászathoz
                kötődő termékeket. Vásárlóink teljes mértékben meg vannak velünk
                elégedve.
              </p>
              <div className="mt-15 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#coolkategoria"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Termékeink
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#coolcontact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Kapcsolat
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:mr-12 lg:mt-13">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-130 lg:h-full lg:ml-14"
          src={kep}
          alt=""
        />
      </div>
    </div>
  );
}
