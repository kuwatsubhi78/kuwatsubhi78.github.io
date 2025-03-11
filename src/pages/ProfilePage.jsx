const ProfilePage = () => {
  return (
    <>
      <div className="flex gap-9">
        <div className="flex-1 space-y-10">
          <h1 className="text-5xl font-bold">
            Hai, Saya{' '}
            <span
              className="bg-gradient-to-r from-red-500 via-blue-500 to-green-500 
             bg-clip-text text-transparent 
             animate-gradient [background-size:300%_150%]"
            >
              Kuwat Subhi
            </span>
          </h1>
          <p>
            Saya adalah pengembang web dengan keahlian di Node.js, Laravel,
            MySQL, JWT, serta dokumentasi API menggunakan Swagger. Berpengalaman
            dalam membangun aplikasi web, dengan fokus pada performa dan
            efisiensi.
          </p>
        </div>
        <div className="flex-none">
          <div className="avatar">
            <div className="w-40 rounded-lg">
              <img src="foto.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-300 rounded-lg ">
        <div className="card-body">
          <p>
            Selain keahlian teknis, saya memiliki pengalaman di industri
            manufaktur dan pernah terlibat dalam MSIB Kampus Merdeka,
            berkontribusi pada proyek teknologi untuk pemberdayaan sosial dan
            wisata di Kepulauan Mentawai. Saya siap berkontribusi dalam proyek
            inovatif dan berdampak luas.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
