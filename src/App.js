import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/announcements">
            <Announcements />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/">
            <Redirect to="/services" />
          </Route>
        </Switch>
      </Router>
      <div class="text-center p-1 py-2 italic">
        <p>Dana Ranch Ward Sacrament Meeting</p>
        <p>January 8, 2023</p>
        <hr />
      </div>

      <div class="text-center py-2">
        <a href="https://www.youtube.com/watch?v=hPn4TfSUUbU" target="_blank">
          <button
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">View
            Broadcast</button>
        </a>
      </div>

      <div class="flex py-1">
        <div class="flex-none px-1">Presiding</div>
        <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div class="flex-none px-1">Bishop Kent</div>
      </div>

      <div class="flex py-1">
        <div class="flex-none px-1">Conducting</div>
        <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div class="flex-none px-1">Bishop Kent</div>
      </div>

      <div class="flex py-1">
        <div class="flex-none px-1">Organist</div>
        <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div class="flex-none px-1">Whitney Kolstad</div>
      </div>

      <div class="flex py-1">
        <div class="flex-none px-1">Chorister</div>
        <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div class="flex-none px-1">Chris Cooley</div>
      </div>

      <div class="text-center py-2">
        <em>Welcome & Announcements</em>
      </div>

      <div class="flex py-1">
        <div class="flex-none px-1">Opening Hymn</div>
        <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div class="flex-none px-1">123</div>
      </div>

      <div class="flex py-1">
        <div class="flex-none px-1">Invocation</div>
        <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div class="flex-none px-1">Chris Cooley</div>
      </div>

      <div class="text-center py-2">
        <em>Ward Business</em>
      </div>

      <div class="flex py-1">
        <div class="flex-none px-1">Sacrament Hymn</div>
        <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div class="flex-none px-1">123</div>
      </div>

      <div class="text-center py-2">
        <em>Administration of the Sacrament</em>
      </div>

      <div class="flex py-1">
        <div class="flex-none px-1">Speaker</div>
        <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div class="flex-none px-1">Scarlet Hoover</div>
      </div>

      <div class="flex py-1">
        <div class="flex-none px-1">Speaker</div>
        <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div class="flex-none px-1">Camilla Workman</div>
      </div>

      <div class="flex py-1">
        <div class="flex-none px-1">Intermediate Hymn</div>
        <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div class="flex-none px-1">123</div>
      </div>

      <div class="flex py-1">
        <div class="flex-none px-1">Speaker</div>
        <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div class="flex-none px-1">D Kersee</div>
      </div>

      <div class="flex py-1">
        <div class="flex-none px-1">Closing Hymn</div>
        <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div class="flex-none px-1">123</div>
      </div>

      <div class="flex py-1">
        <div class="flex-none px-1">Benediction</div>
        <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div class="flex-none px-1">By Invitation</div>
      </div>

      <div class="py-4"></div>
      <hr />
      <h1 class="text-center py-2 uppercase font-bold">Announcements</h1>

      <div class="py-4"></div>
      <hr />
      <h1 class="text-center py-2 uppercase font-bold">Ward Leadership</h1>
      <div class="py-1">
        <div class="italic">Bishop:</div>
        <div class="flex">
          <div class="flex-none px-1">Brandon Kent</div>
          <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
          <div class="flex-none px-1">480.277.1404</div>
        </div>
      </div>
      <div class="py-1">
        <div class="italic">1st Counselor:</div>
        <div class="flex">
          <div class="flex-none px-1">David Kolstad</div>
          <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
          <div class="flex-none px-1">480.277.1404</div>
        </div>
      </div>
      <div class="py-1">
        <div class="italic">2nd Counselor:</div>
        <div class="flex">
          <div class="flex-none px-1">Matthew Hulse</div>
          <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
          <div class="flex-none px-1">480.277.1404</div>
        </div>
      </div>
      <div class="py-1">
        <div class="italic">Executive Secretary:</div>
        <div class="flex">
          <div class="flex-none px-1">Matthew Hulse</div>
          <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
          <div class="flex-none px-1">480.277.1404</div>
        </div>
      </div>
      <div class="py-1">
        <div class="italic">Ward Clerk:</div>
        <div class="flex">
          <div class="flex-none px-1">Matthew Hulse</div>
          <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
          <div class="flex-none px-1">480.277.1404</div>
        </div>
      </div>
      <div class="py-1">
        <div class="italic">Elders Quorum President:</div>
        <div class="flex">
          <div class="flex-none px-1">Matthew Hulse</div>
          <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
          <div class="flex-none px-1">480.277.1404</div>
        </div>
      </div>
      <div class="py-1">
        <div class="italic">Relief Society President:</div>
        <div class="flex">
          <div class="flex-none px-1">Matthew Hulse</div>
          <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
          <div class="flex-none px-1">480.277.1404</div>
        </div>
      </div>
      <div class="py-1">
        <div class="italic">Primary President:</div>
        <div class="flex">
          <div class="flex-none px-1">Matthew Hulse</div>
          <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
          <div class="flex-none px-1">480.277.1404</div>
        </div>
      </div>
      <div class="py-1">
        <div class="italic">Young Womens President:</div>
        <div class="flex">
          <div class="flex-none px-1">Matthew Hulse</div>
          <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
          <div class="flex-none px-1">480.277.1404</div>
        </div>
      </div>
      <div class="py-1">
        <div class="italic">Sunday School President:</div>
        <div class="flex">
          <div class="flex-none px-1">Matthew Hulse</div>
          <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
          <div class="flex-none px-1">480.277.1404</div>
        </div>
      </div>
      <div class="py-1">
        <div class="italic">Ward Mission Leader:</div>
        <div class="flex">
          <div class="flex-none px-1">Mike Cooley</div>
          <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
          <div class="flex-none px-1">480.277.1404</div>
        </div>
      </div>
      <div class="py-1">
        <div class="italic">Temple & Family History Leaders:</div>
        <div class="flex">
          <div class="flex-none px-1">Alan & Helga Goff</div>
          <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
          <div class="flex-none px-1">480.277.1404</div>
        </div>
      </div>
      <div class="py-1">
        <div class="italic">Just Serve Coordinator:</div>
        <div class="flex">
          <div class="flex-none px-1">Mike Wilhelm</div>
          <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
          <div class="flex-none px-1">480.277.1404</div>
        </div>
      </div>
      <div class="py-1">
        <div class="italic">Self-Reliance Specialists:</div>
        <div class="flex">
          <div class="flex-none px-1">Tim & Laurel Cronin</div>
          <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
          <div class="flex-none px-1">480.277.1404</div>
        </div>
      </div>
      <div class="py-1">
        <div class="italic">Missionaries:</div>
        <div class="flex">
          <div class="flex-none px-1">Sisters Layton & Laga</div>
          <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
          <div class="flex-none px-1">480.277.1404</div>
        </div>
      </div>

      <div class="text-stone-800 mt-8 italic">* Appointments with Bishop can be made over the phone with Brother Jarman or online
        <a href="#" target="_blank"
          class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
          with this scheduling link
          <svg aria-hidden="true" class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </a>
      </div>

      <div class="py-4"></div>
      <hr />
      <p class="text-center py-2 uppercase font-bold">2023 Meeting Schedule</p>
      <div class="flex py-1">
        <div class="flex-none px-1">11am - 12pm</div>
        <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div class="flex-none px-1">Sacrament Meeting</div>
      </div>
      <div class="flex py-1">
        <div class="flex-none px-1">12pm - 1pm</div>
        <div class="flex-1 mb-1 border-b border-dashed border-stone-300"></div>
        <div class="flex-none px-1">Primary & Classes</div>
      </div>
      <div class="text-center py-1 underline">Class Schedule</div>
      <div class="italic">1st & 3rd Sunday:</div>
      <ul class="list-disc pl-8 mb-2">
        <li>Sunday School</li>
        <li>Gospel Doctrine</li>
      </ul>
      <div class="italic">2nd & 4th Sunday:</div>
      <ul class="list-disc pl-8 mb-2">
        <li>Relief Society</li>
        <li>Young Womens</li>
        <li>Priesthood Quorums</li>
      </ul>
      <div class="italic">5th Sunday:</div>
      <ul class="list-disc pl-8 mb-2">
        <li><em>By Announcement</em></li>
      </ul>
    </div>
  );
}

export default App;
