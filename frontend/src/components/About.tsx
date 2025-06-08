const About = () => (
  <section className="min-h-[50vh] flex flex-col items-center overflow-hidden bg-black px-4 py-16 ">

    <div className="text-center w-full max-w-5xl text-white">
      <p className="text-7xl font-semibold mb-10">About</p>
      <p className="text-2xl font-semibold ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>

      <p className="text-2xl mt-7 mb-8 mx-auto w-3/4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>

      <div className="w-full flex justify-center">
        <iframe
          className="w-full max-w-[700px] aspect-video rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/VKvEDW98foU"
          frameBorder="0"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div>

      <button
        type="button"
        class="py-4  px-12 mt-14 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Alternative
      </button>
    </div>
  </section>
);

export default About;
