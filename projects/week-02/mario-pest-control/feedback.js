Really great work on this project!  I enjoyed seeing the 'extras' you learned and threw into this such as the audio and click counters.

The organization of your HTML, CSS, and JS is very easy to read and follow, so I do not have a whole lot to say on that.


HTML 
  I see you are using an <input> tags value attribute to display the result of the calculations.
      While this technically will work, you wont see <input> tags used for output.   So rather you would
      use your existing input tags to get the values, and then use something like a <div> or <h1> to display
      the output by setting their textContent or innerHTML to the final value.
    
CSS
  Typically I would give feedback here on using less css selectors in your HTMl by mixing selectors to
      style and element.  Such as
    
    `html
    <div id="container">
      <h1>Title</h1>
    </div>
    `
    
    `css - grabbing h1 by it's parent container
    #container > h1 {
      font-size: 20px;
    }
    `
    
    I did not see a need for this in this project since it was organized on the HTML so well, but will definitely be 
    helpful going forward to keep your HTML page lighter.
    
 JS
    I loved seeing your playSound() function declared and being called inside of your event listener.  This shows a 
      a good understanding of functions for where we are in the course.
      
      The only change I would suggest goes along with using a <div> or <h1> for your output instead of an <input> tag.  In your JS, you would
      just have to set the 'textContent' of your display element to the final result rather than setting the value of an input 
      tag to the final result.
      
      
      Overall, fantastic work!  
