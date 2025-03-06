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
            <h1>User Persona Research</h1>
            <div className="intro-grid">
              <div>
                <p className="title-description">Everyone has encountered objects with exceptionally good design: like a ramen bowl with a built-in hole for chopsticks, a chair that provides excellent back support, or a self-ordering kiosk that makes the ordering process seamless. Have you ever wondered how the designers behind these products, despite never meeting you as a user, created something that feels so intuitive to interact with?
Well, even though they haven't met you in person, they conducted extensive user experience research through interviewing users, creating personas, and analyzing interactions. They have a deep understanding of your needs without ever meeting you.
 
</p>
                 <p className="title-description">
                 In this case study, we will conduct similar user persona research to gain an in-depth understanding of how users interact with self-ordering kiosks in a bubble tea shop. We first interviewed three users, created two personas based on these interviews, and developed a storyboard.
                   {/* <ul>
                     <li>Google Docs</li>
                     <li>MacOS File System</li>
                     <li>Brown CS Website</li>
                   </ul> */}
                 </p>

              </div>
               
            </div>
          </div>
        </section>

        <section id="input">
          <div className="container">
            <h2>Part I: Interface</h2>
            <p className="subtitle-description">The self-ordering kiosk helps customers order drinks so that the staff can focus on making drinks. It allows customers to browse the menu, customize their drinks, and pay for their orders. There are in total two kiosks in the shop. They are located along the way to the counter, so customers can place their orders first and then wait at the counter.
</p>
            
            <div className="interface-section">
              <img 
                src={process.env.PUBLIC_URL + '/annotated_kiosk.png'} 
                alt="Kiosk" 
                className="interface-image"
              />
              
            </div>
          
          </div>
        </section>

        <section id="input">
          <div className="container">
            <h2>Part II: Observation and Interview</h2>
            <p className="subtitle-description">The self-ordering kiosk helps customers order drinks so that the staff can focus on making drinks. It allows customers to browse the menu, customize their drinks, and pay for their orders. There are in total two kiosks in the shop. They are located along the way to the counter, so customers can place their orders first and then wait at the counter.</p>
            
            

            <h3>Observation</h3>
            <div className="observation-list">
            <p>
                  We visited the bubble tea shop during a busy hour (3 PM on a Friday), and two lines naturally formed in front of the kiosks. There were two large illuminated boards on the left side of the line displaying the menu and pictures of the top nine most popular drinks. While waiting in line, some customers looked at the board to decide what to order and discussed their choices with friends, while others simply browsed their phones. The following observations were noted.
                </p>
              <ul>
                 

                <li>
                  <strong>Who They Order With:</strong> Once it was their turn to use the kiosk, users who were with friends usually looked at the kiosk together, while individual customers used it alone.
                </li>

                <li>
                  <strong>Step 1: Enter Mobile Number:</strong> The first step prompted users to enter their phone number. While most people entered their number, a few chose to skip this step.
                </li>

                <li>
                  <strong>Step 2: Choose the Drink:</strong> The second step involved browsing the menu. Two different ordering behaviors were observed. Users who already knew what they wanted used the navigation bar on the left to quickly find their desired section (e.g., "Aroma of Fruits"). Once they located their drink, they proceeded directly to the next step. On the other hand, users who were still deciding typically scrolled through the menu from top to bottom. They tapped on multiple drinks to explore their options before making a final decision and proceeding.
                </li>

                <li>
                  <strong>Step 3: Customize the Drink:</strong> Despite some predetermined drink options, most bubble tea drinks were highly customizable. Users could adjust sugar levels, ice levels, boba types, and more. Each drink offered different customization options. For example, some drinks allowed ice level adjustments but not sugar levels. Certain customizations were only available on weekends (e.g., dragon fruit boba). Categories that couldn't be customized were shown in grey. This step was typically completed quickly.
                </li>

                <li>
                  <strong>Step 4: Pay for the Order:</strong> Once customers had finished ordering, they were shown a preview of their order and had the option to remove or add drinks. Most users didn't make any changes at this step. After confirming their order, they proceeded to payment. Only credit cards were accepted, and the credit card reader was attached to the right side of the kiosk. However, the reader wasn't immediately noticeable, as many kiosks in other locations have their card readers positioned below the screen. Since the kiosk had a minimalist design, users took a moment to examine it before locating the reader.
                </li>

                <li>
                  <strong>Step 5: Enter Name and Receive Order Number:</strong> Users then entered their name and received an order number.
                </li>
              </ul>
            </div>

            <h3>Interview</h3>
            <div className="observation-list">
              <ul>
                <li>
                  <strong>Is this the first time you have used this kiosk? How did you feel when interacting with the kiosk? What stood out to you?</strong>
                  <ul>
                    <li>All users were returning customers of the bubble tea shop, so they had used the kiosk before</li>
                    <li>They noted that the overall design was very simple, and they liked the large touchscreen. They described the interface as intuitive and the ordering process as smooth.</li>
                  </ul>
                </li>

                <li>
                  <strong>Were there any points where you felt uncertain or confused while using the kiosk? If so, what were they?</strong>
                  <ul>
                    <li>The phone number at the entry step received complaints from all three users. They felt slightly uncomfortable providing personal information upfront before even having a chance to review their order. Additionally, there was no clear "skip" option. While a line stated, "The phone number is used for collecting reward points," there was no further explanation of how the reward system worked or whether entering a phone number was mandatory.</li>
                    <li>Moreover, one long-time user noted that the reward system had recently changed. Previously, after entering their phone number, users would see a message like, "You are X drinks away from a free drink." Now, it simply states, "You now have 30 points," without explaining what the numerical value means.</li>
                    <li>Another source of confusion was the varying levels of customization for drinks. Users were unsure why some drinks could be made hot while others couldn't. They wondered if this was due to a machine issue or another restriction. Users suggested that clear labels, such as "Sugar level is fixed for this drink," would help clarify the options.</li>
                    <li>Additionally, users were uncertain about how to collect their drinks. In the final step, users were asked to provide their name and were given an order number. However, it wasn't clear whether they needed to keep the number or if it would be used to identify their order. Unlike many other kiosks, this one did not print receipts, leaving users without any proof of their purchase. One user mentioned that she took a picture of the order number just in case it was needed.</li>
                  </ul>
                </li>

                <li>
                  <strong>How did the kiosk influence your decision-making process when choosing drinks? Did the interface provide enough guidance or feedback to help you complete your order confidently?</strong>
                  <ul>
                    <li>Users noted that the navigation bar with different sections was very clear and helped them browse categories easily (e.g., "Aroma of Milk Tea," "Dessert," etc.).</li>
                    <li>They also appreciated the pictures, which provided an intuitive and visually appealing way to understand drink options.</li>
                    <li>Each drink included a detailed description introducing its tea base and toppings. Some users found this helpful for making a decision without feeling overwhelmed by information. However, others felt that the drink labels were already self-explanatory and that the additional descriptions were unnecessary.</li>
                  </ul>
                </li>

                <li>
                  <strong>In terms of navigation, how easy was it to browse the menu and pay for your drinks?</strong>
                  <ul>
                    <li>Users found the flow smooth and efficient. The kiosk responded quickly, with no noticeable loading time or freezing. Each step had a clear button at the bottom right to proceed to the next step.</li>
                  </ul>
                </li>

                <li>
                  <strong>If you could change one thing about the kiosk interface, what would it be and why?</strong>
                  <ul>
                    <li>Aligned with observed user behavior, some users noted that the card reader was attached to the right side of the kioskand was not very noticeable. They suggested adding an arrow or visual cue on the interface to direct attention to the card reader.</li>
                    <li>Some users also felt that there were too many steps in the ordering process—entering a phone number, choosing a drink, customizing, entering a name, etc. They suggested simplifying or streamlining the process.</li>
                  </ul>
                </li>

                <li>
                  <strong>How does using the kiosk compare to ordering in person? Which do you prefer?</strong>
                  <ul>
                    <li>Most users preferred using the kiosk, while one user didn't mind either option.</li>
                    <li>Users felt that the kiosk removed the pressure of ordering at the counter, allowing them to take their time to customize their drinks comfortably.</li>
                    <li>Additionally, the kiosk provided more detailed information about the drinks, making it easier to explore new options without having to ask staff multiple questions. Users who preferred ordering at the counter mentioned that they already knew what they wanted, so they didn't feel the need to browse other drink options.</li>
                    <li>Some users also noted that when using the kiosk, they felt more comfortable selecting a 0% tip, as opposed to tipping in person.</li>
                  </ul>
                </li>

                <li>
                  <strong>How often do you visit Ten One? When do you usually go?</strong>
                  <ul>
                    <li>User visit frequency ranged from once a week to once every few months.</li>
                    <li>Common occasions included hanging out with friends or buying a drink to stay awake for afternoon work. Users were generally in a good mood when visiting the shop.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="state-models">
          <div className="container">
            <h2>Part III: Personas</h2>
            <p className="subtitle-description">Now that we have in-depth understanding of the users' behavior and preferences when interacting with the kiosk, we can create two personas based on the observations and interviews.</p>

            <div className="personas">
              <div className="persona">
                <h3>Relaxed Jenny</h3>
                <p className="persona-description">Relaxed Jenny is a sophomore in college. It's a sunny Friday afternoon, and her friends suggest they hang out at a bubble tea shop.</p>
                
                <div className="persona-details">
                  <h4>Interface Problems:</h4>
                  <ul>
                    <li>She felt uncomfortable entering her phone number but proceeded to do so.</li>
                    <li>She experienced information overload, as each drink had very detailed descriptions, making it difficult for her to decide.</li>
                    <li>It took her some time to locate the card reader when she was ready to pay.</li>
                  </ul>

                  <h4>Why Relaxed Jenny Represents Users:</h4>
                  <ul>
                    <li>Like Jenny, many users visit the boba shop in a lighthearted mood, looking to spend time with friends. They don't have a go-to drink and usually take their time exploring all the available options. This can be overwhelming, and recommendations from friends may further contribute to information overload.</li>
                    <li>Many of these users, especially first-time visitors, don't use the kiosk frequently. As a result, they feel uncertain about entering their phone number and are unsure where to tap their credit card.</li>
                  </ul>
                </div>
                <div className="persona-image">
                  <img 
                    src={process.env.PUBLIC_URL + '/relaxed_jenny_map.png'} 
                    alt="Jenny" 
                    className="persona-illustration"
                  />
                </div>
              </div>

              <div className="persona">
                <h3>Rushed Andrew</h3>
                <p className="persona-description">Rushed Andrew is a senior in college. He just finished lunch at the dining hall and decided to grab a milk tea before his 1 PM class because he stayed up until 2 AM last night working on his homework.</p>
                
                <div className="persona-details">
                  <h4>Interface Problems:</h4>
                  <ul>
                    <li>As Andrew is short on time, he feels frustrated by the many steps required to place an order, including entering his phone number, name, and customization preferences.</li>
                    <li>Since the boba tea shop occasionally changes the order of drinks on the menu, it was difficult for Andrew to quickly find the drink he had in mind.</li>
                  </ul>

                  <h4>Why Rushed Andrew Represents Users:</h4>
                  <ul>
                    <li>Like Andrew, many users visit the boba shop when they are in a hurry, often between classes or meetings. They typically have a specific drink in mind and just want a fast, efficient ordering process.</li>
                    <li>For these users, excessive steps and required inputs create friction, making the kiosk feel slow and inconvenient. Additionally, changes in menu layout disrupt their usual ordering flow, forcing them to search for their preferred drink rather than selecting it quickly. These challenges can lead to frustration and may even discourage users from using the kiosk in the future.</li>
                  </ul>
                </div>
                <div className="persona-image">
                  <img 
                    src={process.env.PUBLIC_URL + '/rushed_andrew_map.png'} 
                    alt="Andrew" 
                    className="persona-illustration"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reflection">
          <div className="container">
            <h2>Part IV: Storyboard</h2>
            <div>
              <p>
                Now we choose Relaxed Jenny as our persona, and create a storyboard to illustrate the user interaction with the kiosk.
              </p>

              <div className="storyboard-section">
                <img 
                  src={process.env.PUBLIC_URL + '/story_board.png'} 
                  alt="Storyboard" 
                  className="storyboard-image"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

     
    </div>
  );
}

export default App;
