export default function About() {
  return (
    <main className="p-5 flex flex-col items-center">
      <section className="section" id="intro">
        <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
        <h3 className="text-lg leading-none text-center mb-10">
          We aim to connect job seekers with their dream jobs. Our platform is
          designed to be user-friendly and efficient.
        </h3>
      </section>

      <section className="section mb-10 max-w-4xl w-full" id="jobs-section">
        <h2 className="text-3xl font-bold mb-4 text-center">Job exchange</h2>
        <div className="content flex flex-col lg:flex-row items-center gap-6">
          <div className="text flex-1 text-lg">
            <p>
              Our platform will allow employers considering students for hire to
              post a job to the most active and relevant audience. Job Hunter
              will also allow students to select jobs only among available
              positions and save search time.
            </p>
          </div>
          <div className="image flex-1">
            <img
              src="/search.png"
              alt="Job"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <section
        className="section mb-10 max-w-4xl w-full"
        id="team-search-section"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Team search</h2>
        <div className="content flex flex-col lg:flex-row-reverse items-center gap-6">
          <div className="image-left flex-1">
            <img
              src="/team.png"
              alt="Team"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="text flex-1 text-lg">
            <p>
              Job Hunter will allow you to post ads to find like-minded people
              to participate in hackathons, team Olympiads, and pet projects.
            </p>
          </div>
        </div>
      </section>

      <section className="section max-w-4xl w-full" id="team">
        <h2 className="text-3xl font-bold mb-4 text-center">Our team</h2>
        <div className="team-photos flex flex-wrap justify-center gap-10">
          <div className="team-member text-center">
            <img
              src="/Misha.jpg"
              alt="Misha"
              className="rounded-full w-40 h-40 object-cover shadow-md mb-4"
            />
            <p>Mikhail Gladyshev</p>
          </div>
          <div className="team-member text-center">
            <img
              src="/Mary.jpg"
              alt="Mary"
              className="rounded-full w-40 h-40 object-cover shadow-md mb-4"
            />
            <p>Mariia Nikolashina</p>
          </div>
          <div className="team-member text-center">
            <img
              src="/Mark.jpg"
              alt="Mark"
              className="rounded-full w-40 h-40 object-cover shadow-md mb-4"
            />
            <p>Mark Petrov</p>
          </div>
        </div>
      </section>
    </main>
  );
}
