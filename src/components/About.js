import { useEffect } from 'react';

export default function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className="text-center py-2 church-font font-lg">Ward Leadership</h1>

      <div className="condensed-text">
        <div className="py-1">
          <div className="italic font-bold font-bold">Bishop:</div>
          <div className="flex">
            <div className="flex-none px-1">Brandon Kent</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
            <div className="flex-none px-1">480.277.1404</div>
          </div>
        </div>
        <div className="py-1">
          <div className="italic font-bold">1st Counselor:</div>
          <div className="flex">
            <div className="flex-none px-1">David Kolstad</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
            <div className="flex-none px-1">480.277.1404</div>
          </div>
        </div>
        <div className="py-1">
          <div className="italic font-bold">2nd Counselor:</div>
          <div className="flex">
            <div className="flex-none px-1">Matthew Hulse</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
            <div className="flex-none px-1">480.277.1404</div>
          </div>
        </div>
        <div className="py-1">
          <div className="italic font-bold">Executive Secretary:</div>
          <div className="flex">
            <div className="flex-none px-1">Matthew Hulse</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
            <div className="flex-none px-1">480.277.1404</div>
          </div>
        </div>
        <div className="py-1">
          <div className="italic font-bold">Ward Clerk:</div>
          <div className="flex">
            <div className="flex-none px-1">Matthew Hulse</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
            <div className="flex-none px-1">480.277.1404</div>
          </div>
        </div>
        <div className="py-1">
          <div className="italic font-bold">Elders Quorum President:</div>
          <div className="flex">
            <div className="flex-none px-1">Matthew Hulse</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
            <div className="flex-none px-1">480.277.1404</div>
          </div>
        </div>
        <div className="py-1">
          <div className="italic font-bold">Relief Society President:</div>
          <div className="flex">
            <div className="flex-none px-1">Matthew Hulse</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
            <div className="flex-none px-1">480.277.1404</div>
          </div>
        </div>
        <div className="py-1">
          <div className="italic font-bold">Primary President:</div>
          <div className="flex">
            <div className="flex-none px-1">Matthew Hulse</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
            <div className="flex-none px-1">480.277.1404</div>
          </div>
        </div>
        <div className="py-1">
          <div className="italic font-bold">Young Womens President:</div>
          <div className="flex">
            <div className="flex-none px-1">Matthew Hulse</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
            <div className="flex-none px-1">480.277.1404</div>
          </div>
        </div>
        <div className="py-1">
          <div className="italic font-bold">Sunday School President:</div>
          <div className="flex">
            <div className="flex-none px-1">Matthew Hulse</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
            <div className="flex-none px-1">480.277.1404</div>
          </div>
        </div>
        <div className="py-1">
          <div className="italic font-bold">Ward Mission Leader:</div>
          <div className="flex">
            <div className="flex-none px-1">Mike Cooley</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
            <div className="flex-none px-1">480.277.1404</div>
          </div>
        </div>
        <div className="py-1">
          <div className="italic font-bold">Temple & Family History Leaders:</div>
          <div className="flex">
            <div className="flex-none px-1">Alan & Helga Goff</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
            <div className="flex-none px-1">480.277.1404</div>
          </div>
        </div>
        <div className="py-1">
          <div className="italic font-bold">Just Serve Coordinator:</div>
          <div className="flex">
            <div className="flex-none px-1">Mike Wilhelm</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
            <div className="flex-none px-1">480.277.1404</div>
          </div>
        </div>
        <div className="py-1">
          <div className="italic font-bold">Self-Reliance Specialists:</div>
          <div className="flex">
            <div className="flex-none px-1">Tim & Laurel Cronin</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
            <div className="flex-none px-1">480.277.1404</div>
          </div>
        </div>
        <div className="py-1">
          <div className="italic font-bold">Missionaries:</div>
          <div className="flex">
            <div className="flex-none px-1">Sisters Layton & Laga</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
            <div className="flex-none px-1">480.277.1404</div>
          </div>
        </div>
      </div>

      <div className="text-center text-stone-800 mt-8 italic">* Appointments with Bishop can be made over the phone with Brother Jarman or online:
      </div>

      <div className="text-center py-2">
        <a href="https://www.youtube.com/watch?v=hPn4TfSUUbU" target="_blank" rel="noreferrer">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Schedule With Bishop
          </button>
        </a>
      </div>

    </div>
  )
};