import bgImg from '../Assets/img/bg-removebg.png'


export const Contact = () => {
    return (
      <div className="overflow-hidden bg-black relative" id = "contact">
        <img src={bgImg} alt="" srcset="" className = "hidden lg:block lg:absolute lg:right-0 lg:top-5 lg:opacity-30 lg:w-1/4 "/>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.
              </p>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.
              </p>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="relative">
                <div className="relative bg-white bg-opacity-10 rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl text-white font-semibold sm:text-center sm:mb-6 sm:text-2xl ">
                    Contact Us 
                  </h3>
                  <form>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="name"
                        className="inline-block mb-1 font-medium text-white"
                      >
                        Name
                      </label>
                      <input
                        placeholder="Name"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-gray-200 border border-gray-300 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline"
                        id="name"
                        name="name"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium text-white"
                      >
                        E-mail
                      </label>
                      <input
                        placeholder="xyz@mail.com"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-gray-200 border border-gray-300 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium text-white"
                      >
                        Message
                      </label>
                      <input
                        placeholder=""
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-gray-200 border border-gray-300 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline"
                        id="name"
                        name=""
                      />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-white text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none "
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };