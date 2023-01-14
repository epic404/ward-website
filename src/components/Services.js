import { useEffect } from 'react'

export default function Services() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <img src="./modern-logo.png" className="zero-auto w-3/4 md:w-1/2 lg:w-1/4" alt="church-logo"/>
      {/* <img src="./retro-logo.png" style="margin: 0 auto" className="zero-auto w-1/2 md:w-1/4" alt="church-logo" /> */}
      <div className="church-font text-center p-1 py-2">
        <p className="font-md">Dana Ranch Ward</p>
        <p className="font-lg">Sacrament Meeting</p>
        <p className="font-md">January 8, 2023</p>
        <hr className="h-px my-4 bg-gray-400 border-0" />
      </div>

      <div className="text-center py-2">
        <a href="https://www.youtube.com/watch?v=hPn4TfSUUbU" target="_blank" rel="noreferrer">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            View Live Broadcast
          </button>
        </a>
      </div>

      <div className="flex py-1">
        <div className="flex-none px-1">Presiding</div>
        <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div className="flex-none px-1">Bishop Kent</div>
      </div>

      <div className="flex py-1">
        <div className="flex-none px-1">Conducting</div>
        <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div className="flex-none px-1">Bishop Kent</div>
      </div>

      <div className="flex py-1">
        <div className="flex-none px-1">Organist</div>
        <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div className="flex-none px-1">Whitney Kolstad</div>
      </div>

      <div className="flex py-1">
        <div className="flex-none px-1">Chorister</div>
        <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div className="flex-none px-1">Chris Cooley</div>
      </div>

      <div className="text-center py-2">
        <em>Welcome & Announcements</em>
      </div>

      <div className="flex py-1">
        <div className="flex-none px-1">Opening Hymn</div>
        <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div className="flex-none px-1">123</div>
      </div>

      <div className="flex py-1">
        <div className="flex-none px-1">Invocation</div>
        <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div className="flex-none px-1">Chris Cooley</div>
      </div>

      <div className="text-center py-2">
        <em>Ward Business</em>
      </div>

      <div className="flex py-1">
        <div className="flex-none px-1">Sacrament Hymn</div>
        <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div className="flex-none px-1">123</div>
      </div>

      <div className="text-center py-2">
        <em>Administration of the Sacrament</em>
      </div>

      <div className="flex py-1">
        <div className="flex-none px-1">Speaker</div>
        <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div className="flex-none px-1">Scarlet Hoover</div>
      </div>

      <div className="flex py-1">
        <div className="flex-none px-1">Speaker</div>
        <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div className="flex-none px-1">Camilla Workman</div>
      </div>

      <div className="flex py-1">
        <div className="flex-none px-1">Intermediate Hymn</div>
        <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div className="flex-none px-1">123</div>
      </div>

      <div className="flex py-1">
        <div className="flex-none px-1">Speaker</div>
        <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div className="flex-none px-1">D Kersee</div>
      </div>

      <div className="flex py-1">
        <div className="flex-none px-1">Closing Hymn</div>
        <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div className="flex-none px-1">123</div>
      </div>

      <div className="flex py-1">
        <div className="flex-none px-1">Benediction</div>
        <div className="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div className="flex-none px-1">By Invitation</div>
      </div>
    </div>
  )
};