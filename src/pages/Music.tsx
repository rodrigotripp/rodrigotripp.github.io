
function Music() {
  return (
    <section className="p-4 md:p-8 w-full">
        <div className="bg-white p-4 rounded-lg shadow-lg text-black md:p-6">
          <h2 className="text-3xl mb-2 pb-2 border-b-2 border-stone-100">
            Music
          </h2>
          <p className="text-gray-500 mb-6">
            My tracks on SoundCloud — a mix of original productions and
            experiments.
          </p>
          <iframe
            title="Rodrigo Tripp on SoundCloud"
            width="100%"
            height="450"
            scrolling="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ronsumusic&color=%230d9488&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            className="rounded-lg"
          />
          <p className="text-gray-400 text-sm mt-4">
            Follow me on{" "}
            <a
              href="https://soundcloud.com/ronsumusic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              soundcloud.com/ronsumusic
            </a>
          </p>
        </div>
      </section>
  );
}

export default Music;
