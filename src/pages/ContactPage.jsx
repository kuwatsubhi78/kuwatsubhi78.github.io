import { Instagram, Mail, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-9">
        <div className="space-y-10">
          <h1 className="text-5xl font-bold">Kontak</h1>
          <p>
            Berikut beberapa projext yang saya kerjakan secara individu maupun
            kelompok.
          </p>
          <div className="flex flex-wrap gap-2">
            <a className="btn rounded-lg">
              <Mail size={20} />
              6bQ7z@example.com
            </a>
            <a className="btn rounded-lg">
              <Instagram size={20} />
              Kuwat Subhi
            </a>
          </div>
        </div>
        <div className="card bg-base-200 rounded-lg">
          <div className="card-body">
            <h3 className="card-tittle"> Kontak Saya</h3>
            <div className="py-4 space-y-2">
              <input
                type="text"
                className="input w-full rounded-lg"
                placeholder="Nama dan Email"
              />
              <textarea
                name=""
                id=""
                rows="5"
                type="text"
                className="textarea w-full rounded-lg"
                placeholder="Pertanyaan dan Masukan"
              ></textarea>
            </div>
            <div className="card-actions">
              <button className="btn btn-primary rounded-lg">
                <Send size={20} />
                <span>Kirim</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
