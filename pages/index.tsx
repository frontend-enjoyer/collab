import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section className="section" id="jobs-section">
        <h2>JOB EXCHANGE</h2>
        <div className="content">
          <div className="text">
            <p>
              Our platform will allow employers considering students for hire to
              post a job to the most active and relevant audience. IU Collab
              will also allow students to select jobs only among available
              positions and save search time.
            </p>
          </div>
          <div className="image">
            <img src="/search.png" alt="Job" />
          </div>
        </div>
      </section>

      <section className="section" id="team-search-section">
        <h2>TEAM SEARCH</h2>
        <div className="content">
          <div className="image-left">
            <img src="/team.png" alt="Team" />
          </div>
          <div className="text">
            <p>
              IU Collab will allow you to post ads to find like-minded people to
              participate in hackathons, team Olympiads and pet projects.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="team-section">
        <h3>OUR TEAM</h3>
        <div className="team">
          <div className="team-member">
            <img src="/Mark.jpg" alt="Mark Petrov" />
            <h4>Mark Petrov</h4>
            <p>Frontend developer, UX/UI designer</p>
          </div>
          <div className="team-member">
            <img src="/Misha.jpg" alt="Mikhail Gladyshev" />
            <h4>Mikhail Gladyshev</h4>
            <p>Frontend developer, DevOps</p>
          </div>
          <div className="team-member">
            <img src="/Mary.jpg" alt="Maria Nikolaevna" />
            <h4>Mariia Nikolashina </h4>
            <p>Fullstack Developer</p>
          </div>
        </div>
      </section>
    </main>
  );
}
