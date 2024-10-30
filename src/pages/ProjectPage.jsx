import { useEffect } from 'react';
import { useState } from 'react';

const ProjectPage = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch('/json/ProjectData.json').then((response) =>
      response.json().then((data) => setDatas(data))
    );
  }, []);
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
          >
            <div className="card-body">
              <figure className="aspect-video w-full">
                <img
                  src={'https://robohash.org/' + data.title}
                  alt={data.title}
                />
              </figure>
              <h3 className="card-title">{data.title}</h3>
              <p className="text-sm">{data.description}</p>
              <div className="card-actions justify-end">
                <a
                  href={data.url}
                  target="_blank"
                  className="btn btn-primary rounded-lg"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectPage;
