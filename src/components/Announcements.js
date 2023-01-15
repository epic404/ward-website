import { useEffect } from 'react';
import WardAnnouncement from './WardAnnouncement';

export default function Announcements() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className="text-center py-2 church-font font-lg">Announcements</h1>

      <hr className="h-px my-4 bg-gray-400 border-0" />
      <h2 className="mb-2 text-lg font-semibold text-gray-900">Bishopric:</h2>
      <ul className="max-w-md space-y-1 text-gray-800 list-disc list-inside">
        <li key="1">In an effort to better communicate as a ward family, we would like to invite everyone to verify your contact info on your church records. We would like for everyone to please verify that every adult has a valid email address, and that every household has an email contact.</li>
      </ul>

      <hr className="h-px my-4 bg-gray-400 border-0" />
      <h2 className="mb-2 text-lg font-semibold text-gray-900">Stake:</h2>
      <ul className="max-w-md space-y-1 text-gray-800 list-disc list-inside">
        <li key="1">Stake Conference will be on January 28th - 29th</li>
        <li key="2">On January 29th at 6pm there will be an Addiction Recovery Fireside: "Hope, Healing & Peace" with Harold Blomquist. It will be held at 2424 N. Old Gilbert Rd.</li>
        <li key="3">
          The Kimball Stake is sponsoring another round of Self-reliance classes beginning in January of the New Year.
          The information for the classes are as follows:
          <br />
          <br />
          Emotional Resilience<br />
          Begins Tuesday Jan. 17th @ 7pm<br />
          Facilitators: Brother and Sister Cronin  - 480- 298-8785<br />
          <br />
          <br />
          Personal Finance<br />
          Begins Thursday Jan.19th<br />
          Brother and Sister Stanford - 516-526-7756<br />
          <br />
          <br />
          ***Participants will need to pre-register for the classes by calling or texting the facilitators at the numbers provided.***
        </li>
      </ul>

      {/* {
        testConfig.announcements.map((item, index) => {
          if (item.announcements.length) {
            return <WardAnnouncement
                      key={index}
                      organization={item.organization}
                      announcements={item.announcements} />
          }
        })
      } */}
    </div>
  )
}