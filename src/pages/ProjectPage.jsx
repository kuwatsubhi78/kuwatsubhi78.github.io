import { useEffect } from 'react';
import { useState } from 'react';

const ProjectPage = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch('/json/ProjectData.json').then((response) =>
      response.json().then((data) => setDatas(data))
    );
  }, []);

  const openProject = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer'); // Buka di tab baru
    } else {
      alert('URL tidak tersedia!');
    }
  };
  return (
    <>
      <h1 className="text-5xl font-bold">My Projects,</h1>
      <p>
        Berikut beberapa projext yang saya kerjakan secara individu maupun
        kelompok.
      </p>
      <div className="masonry">
        {datas.map((data) => (
          <div
            className="card masonry-item bg-base-200 rounded-lg hover:scale-105 transition-all cursor-pointer"
            key={data.id}
            onClick={() => openProject(data.url)}
          >
            <div className="card-body">
              <figure className="aspect-video w-full ">
                <img
                  src={data.images}
                  alt={data.title}
                  className="rounded-lg"
                />
              </figure>
              <h3 className="card-title">{data.title}</h3>
              <p className="text-sm">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectPage;
