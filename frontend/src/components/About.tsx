const About = () => (
  <section className="min-h-[50vh] flex flex-col items-center overflow-hidden px-4 py-16 ">
    <div className="text-center w-full max-w-5xl">
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
          className="w-full max-w-[700px] aspect-video rounded-lg shadow-lg border-4 border-gray-300"
          src="https://www.youtube.com/embed/VKvEDW98foU"
          frameBorder="0"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div>

      <div class="flex justify-center items-center gap-12 h-full mt-10">
        <div class="bg-gradient-to-b from-stone-300/40 to-transparent p-[4px] rounded-[16px]">
          <button class="group p-[4px] rounded-[12px] bg-gradient-to-b from-white to-stone-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995]">
            <div class="bg-gradient-to-b from-stone-200/40 to-white/80 rounded-[8px] px-2 py-2">
              <div class="flex gap-2 items-center">
                <span class="font-semibold">Get Started</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default About;
