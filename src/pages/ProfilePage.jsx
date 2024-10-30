const ProfilePage = () => {
  return (
    <>
      <div className="flex gap-9">
        <div className="flex-1 space-y-10">
          <h1 className="text-5xl font-bold">Hai,</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            dolore, tempora cumque nihil expedita accusamus eaque facilis
            sapiente perferendis sint inventore quas aliquam placeat. Maiores
            eos et dolor reprehenderit quidem.
          </p>
        </div>
        <div className="flex-none">
          <div className="avatar">
            <div className="w-40 rounded-lg">
              <img src="foto.jpg" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-200 rounded-lg">
        <div className="card-body">
          <h3 className="card-tittle">Tittle</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            dolore, tempora cumque nihil expedita accusamus eaque facilis
            sapiente perferendis sint inventore quas aliquam placeat. Maiores
            eos et dolor reprehenderit quidem.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
