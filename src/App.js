import React from 'react';
import './styles.css';

function App() {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <main>
        <section id="introduction">
          <div className="container">
            <h1>Dropdown Redesign</h1>
            <div className="intro-grid">
              <div>
                <p className="title-description">Have you ever noticed the dropdowns or checkboxes on a website? Have you ever tried using a keyboard to interact with them and found it challenging? These elements, known as <b>components</b>, are reusable building blocks that designers use to create consistent and functional interfaces. 
                 Today, most digital interfaces rely on a predefined set of components, and ensuring their accessibility is essential. However, accessibility can vary across different applications.</p>

                 <p className="title-description">
                   In this case study, we will closely examine the accessibility of dropdown menus in three commonly used applications:
                   <ul>
                     <li>Google Docs</li>
                     <li>MacOS File System</li>
                     <li>Brown CS Website</li>
                   </ul>
                 </p>

                 <p className="title-description">By analyzing these dropdowns, we want to understand how well they support accessibility and where improvements can be made.</p>
              </div>
               
            </div>
          </div>
        </section>

        <section id="input">
          <div className="container">
            <h2>Part I: Input</h2>
            <p className="subtitle-description">One way to make components accessible is to allow users to do things <b>multiple ways</b> (inputs). Here we compare and contrast ways of inputs (<b>mouse</b>, <b>keyboard</b>, and <b>touch</b>) across the three applications.</p>
            
            <div className="app-screenshots">
              <div className="screenshot">
                <img src="google-docs.png" alt="Google Docs dropdown interface" />
                <p>Google Docs Dropdown</p>
              </div>
              <div className="screenshot">
                <img src="macos.png" alt="MacOS File System dropdown" />
                <p>MacOS File System</p>
              </div>
              <div className="screenshot">
                <img src="brown-cs.png" alt="Brown CS Website dropdown" />
                <p>Brown CS Website</p>
              </div>
            </div>

            <div className="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>Input Method</th>
                    <th>Google Docs</th>
                    <th>MacOS File System</th>
                    <th>Brown CS Website</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mouse</td>
                    <td>
                      <ul>
                        <li>Submenu navigation is difficult - requires detoured path to reach items (see the blue path in the screenshot below)</li>
                        <li>Direct path causes submenu to disappear (see the red path in the screenshot below)</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Uses "shifting triangle" for easier submenu navigation</li>
                        <li>Submenu stays open when moving between menu items</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Simple navigation with no submenus</li>
                        <li>Clear visual feedback with orange highlight</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Keyboard</td>
                    <td>
                      <ul>
                        <li>Good accessibility with keyboard shortcuts</li>
                        <li>Arrow keys for menu navigation</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>No default keyboard shortcuts</li>
                        <li>Can be customized in System Preferences</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Poor keyboard support</li>
                        <li>Cannot access menu items with keyboard</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Touch</td>
                    <td>
                      <ul>
                        <li>Direct tap access to submenus</li>
                        <li>Easier than mouse navigation</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>No touch screen support</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Direct tap navigation</li>
                        <li>No hover effects in touch mode</li>
                      </ul>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>

            <div className="illustration">
              <img src="Google-doc-mouse-illustration.png" alt="Illustration of mouse paths in Google Docs dropdown" />
              <p className="illustration-caption">Illustration of mouse paths in Google Docs dropdown</p>
            </div>
          </div>
        </section>

        <section id="output">
          <div className="container">
            <h2>Part II: Output</h2>
            <p className="subtitle-description">Another way to make components accessible is to allow users to do things multiple ways (outputs). Here we compare and contrast ways of outputs (<b>styles</b>, <b>voiceover</b>, <b>focus order</b>, etc) across the three applications.</p>
            
            <div className="output-list">
              <ul>
                <li>
                  <strong>Background Color:</strong> All three applications use background color changes as visual cues when users hover over or click dropdown items. Specifically, Google Docs turns the background dark gray, a common highlight color used to draw users' attention. MacOS changes it to light green, which may be intended to align with the overall styling of MacOS. The Brown CS website turns it orange, creating a strong contrast with the surrounding blue, unfocused items. This deliberate design choice uses color contrast to draw users' attention.
                </li>
                
                <li>
                  <strong>Floating Label:</strong> When hovering over a dropdown, Google Docs has a unique floating label feature, where a black box appears and displays the function of the dropdown (e.g., "Styles," "Font"). This allows mouse users to understand the function of the dropdown without clicking and provides better information for users relying on VoiceOver. MacOS and the Brown CS website do not have this feature.
                </li>
                
                <li>
                  <strong>Border:</strong> On the Brown CS website, clicking a menu item changes its border from invisible to white. This serves as an additional visual cue (in addition to the background color change) to indicate a state change and is also visually appealing.
                </li>
                
                <li>
                  <strong>Arrows:</strong> Google Docs includes a small downward arrow on the right side of the dropdown to indicate that users can click to expand the menu. After clicking, the arrow flips upward, signaling that it can be clicked again to collapse the menu. MacOS and the Brown CS website do not have this feature.
                </li>
                
                <li>
                  <strong>VoiceOver:</strong> Overall, Google Docs provides more comprehensive VoiceOver support. For example, when hovering over the dropdown menu, VoiceOver on Google Docs states, "You are currently on a toolbar. To interact with the items, press Control-Option-Shift-Down Arrow," specifying the precise location and potential next steps. In contrast, MacOS does not have VoiceOver output at all, and the Brown CS website only provides the vague message, "You are currently on web content." This occurs because VoiceOver on the Brown CS website only recognizes interactive elements and does not include the dropdown menu, so it only acknowledges that the user is on the webpage without offering additional information.
                </li>
                
                <li>
                  <strong>Focus Order:</strong> Overall, MacOS provides the best focus order. It is logical and consistent, allowing users to navigate from left to right using the Tab key without skipping any items. Submenus can be accessed using the up and down arrow keys. In Google Docs, the focus order follows the general layout, beginning with the editing menu, then scrolling, followed by outlines, and finally the document content. However, it skips individual items in the editing menu (e.g., "File," "Edit," "View"), preventing direct navigation through them. On the Brown CS website, users cannot navigate the dropdown menu using the keyboard at all because the Tab key only moves through interactive components, such as the search box, and does not include menu dropdowns.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="state-models">
          <div className="container">
            <h2>Part III: State Models</h2>
            <p className="subtitle-description">After understanding the inputs and outputs of the dropdown components in the three applications, we can explore ways to improve their accessibility design. We chose to redesign Google Docs, focusing specifically on mouse and keyboard users. In this section, we use state models, which visualize how a user may interact with the component, to present both the original design and the new design.</p>

            <div className="state-model-section">
              <h3>Mouse User</h3>
              <div className="state-comparison">
                <div className="state-image">
                  <img src="mouse-old-state-model.png" alt="Original mouse user state model" />
                  <p>Original Design: Mouse users must follow a precise path to access submenus</p>
                </div>
                <div className="state-image">
                  <img src="mouse-new-state-model.png" alt="New mouse user state model" />
                  <p>Improved Design: Added delay before submenu closes and wider clickable area</p>
                </div>
              </div>

              <div className="design-changes">
                <div className="change">
                  <h4>Change 1: Hover to Expand</h4>
                  <p>I removed the requirement to click to expand dropdown items. Now, the dropdown expands directly upon hover, eliminating the need for a mouse click.</p>
                  
                  <p >This improves the efficiency of user navigation, especially for first-time users, as they can immediately see the expanded submenu items without needing to click.</p>
                  
                  <p className="trade-off"><strong>Trade-offs:</strong> However, this change comes with a trade-off. The interface may become slightly more crowded since all submenus will expand upon hover, which could be less ideal for repeated users who are already familiar with the submenu content.</p>
                </div>

                <div className="change">
                  <h4>Change 2: Improved Submenu Navigation</h4>
                  <p>I added <b>"shifting triangle"</b> for expanded submenus to make it easier to reach an item in submenu; I also added <b>time delay</b> to make it harder for the expanded submenu to collapse.</p>
                  
                  <p>This change solves a major issue in Google Doc dropdowns: when a user tries to click a submenu item by moving the cursor in a straight line, the submenu collapses as the cursor briefly leaves the submenu region (this path is highlighted in red in the diagram). The only reliable way to reach the submenu is by taking a less direct, detoured path, which is unintuitive and inefficient (highlighted in blue).</p>
                  
                  <p>The first part of this change introduces a "shifting triangle," which prevents the submenu from disappearing when the cursor temporarily leaves its region while moving toward a submenu item. This adjustment accommodates users with shaky hands and enhances accessibility. The second part adds a time delay, reducing the likelihood of the expanded submenu collapsing too quickly.</p>
                  
                  <p className="trade-off"><strong>Trade-off:</strong> These changes improve learnability and accessibility by allowing users to follow an intuitive straight-line path to the submenu item rather than taking a detour. However, efficiency may be slightly compromised for users who prefer to close the submenu by moving the cursor out of the region, as they now have to wait for the time delay.</p>
                </div>
              </div>

            </div>

            <div className="state-model-section">
              <h3>Keyboard User</h3>
              <div className="state-comparison">
                <div className="state-image">
                  <img src="keyboard-old-state-model.png" alt="Original keyboard interaction state model" />
                  <p>Original Design: Limited keyboard navigation with inconsistent focus order</p>
                </div>
                <div className="state-image">
                  <img src="keyboard-new-state-model.png" alt="Improved keyboard interaction state model" />
                  <p>Improved Design: Consistent tab order and arrow key navigation for all menu items</p>
                </div>
              </div>

              <div className="design-changes">
                <div className="change">
                  <h4>Change 1: Left Arrow to Close Submenu</h4>
                  <p>Currently, there's no way to close an expanded submenu without exiting the entire dropdown. Adding the <b>left arrow key</b> to close the submenu makes it more efficient for users to return to the parent item.</p>
                  
                  <p>This change is also easy to learn since the right arrow expands the submenu, so it's intuitive that the left arrow should close it.</p>
                </div>
              </div>
            </div>

            <div className="state-model-section">
              <h3>Example Designs</h3>
              <p>Based on our analysis above, we have redesigned the dropdown for mouse users. Here we present the "Default" state and "Submenu expanded" state.</p>
              
              <div className="design-states">
                <div className="state-image-row">
                  <div className="design-state">
                    <img src="initial-state-design.png" alt="Initial state design" />
                    <p>Initial State</p>
                  </div>
                  <div className="design-state">
                    <img src="hover-state-design.png" alt="Hover state design" />
                    <p>Hover Over Submenu Item State</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reflection">
          <div className="container">
            <h2>Part IV: Reflection</h2>
            <div>
              <p><strong>What do these three applications do well:</strong></p>
              <p>MacOS File's learnability for keyboard users is excellent. On the right side of most menu items, the corresponding keyboard shortcut is explicitly displayed (e.g., "Ctrl + Option + U"). This makes navigation easier for first-time and occasional users.</p>
              <p>Brown CS does a great job of providing multiple cues for a single action. For example, when a submenu item is clicked, not only does the background color change to bright orange, but the item also gains a white border. These cues are not only visually appealing but also enhance the user experience by making interactions smoother.</p>
              <p>When a user hovers, clicks, etc., Google Docs always provides feedback, such as darkening the background. This ensures that each user action is accompanied by visual cues, helping them understand what the action does and how to achieve the functionality they want.</p>
              
              <br />
              
              <p><strong>Examples of how the accessibility/inaccessibility of inputs and outputs in the three applications could also impact users with impairments either positively or negatively, respectively:</strong></p>
              <p>Positive example: Google Docs provides comprehensive accessibility support. Every action that can be performed with a mouse can also be completed using only the keyboard. It is also highly intuitive with great learnability. I watched a YouTube tutorial and became comfortable navigating the page using only the keyboard within five minutes.</p>
              <p>Negative example: The Brown CS website has poor accessibility support for keyboard users. Only interactive elements, such as the search bar, can be reached. Users cannot select menu items, making it impossible to navigate to subpages.</p>
              
              <br />
              
              <p><strong>Accessibility considerations that were not addressed that we accounted for in our design:</strong></p>
              <p>The submenu disappears when the cursor moves slightly outside its boundary, making navigation difficult for users with motor impairments or shaky hands. We solved this problem by implementing a "shifting triangle" and adding a delay before collapsing the submenu to improve accessibility.</p>
              
              <br />
              
              <p><strong>Between mouse, keyboard, touch/mobile, and screen reader users, which are most commonly prioritized in the process of creating components?</strong></p>
              <p>Mouse users are definitely the most commonly prioritized when designing components, as they make up the majority of users. This means that when there is a conflict or tradeoff in functionality between mouse users and other users, mouse users are given priority. For example, many drag-and-drop interactions (e.g., file uploads, rearranging items) lack keyboard alternatives such as arrow keys or shortcuts.</p>
              
              <br />
              
              <p><strong>In her work at Mismatch.design and Google, Kat Holmes is helping other designers to rethink inclusive design not as a remedy for "personal health conditions" but as solves for "mismatches" — moments where human interactions are hindered by an absence of appropriate design solutions. How did our redesign solve a "mismatch" in our world?</strong></p>
              <p>Our redesign solves a "mismatch" by addressing the lack of an intuitive way to close submenus for keyboard users. Previously, there wasn't a way for users to collapse an expanded submenu but had to exit the entire dropdown. This makes navigation inefficient and frustrating. By introducing the left arrow key to close submenus, we created a logical and learnable interaction that aligns with how users expect keyboard navigation to work—right to expand, left to collapse. This makes the experience more inclusive for keyboard users.</p>
            </div>
          </div>
        </section>
      </main>

     
    </div>
  );
}

export default App;
