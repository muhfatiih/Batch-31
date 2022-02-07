let blogs = []

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'Desember'
]

function addBlog(event) {
    
    event.preventDefault()
    
    let title = document.getElementById ('input-blog-title').value
    let content = document.getElementById ('input-blog-content').value
    let startdate = document.getElementById ('input-start-date').value
    let enddate = document.getElementById ('input-end-date').value
    let icon = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(logo => logo.value);
    let image = document.getElementById ('input-blog-image')
    image= URL.createObjectURL(image.files[0])
   

    let blog = {
        author: `Fatih`,
        title,
        content,
        startdate,
        enddate,
        icon,
        image,
        postedAt: new Date(), 
    }

    blogs.push(blog)
    renderBlog()
}


function renderBlog() {

  let lengthData = blogs.length
  console.log(lengthData)
  let blogContainer = document.getElementById('contents')
  blogContainer.innerHTML = firstContent() ;
  
  for (let i = 0; i < lengthData; i++) {
    
    let getLogo = blogs[i].icon.map(logo => `<img src="assets/${logo}">`)

    console.log(getLogo)
    
    blogContainer.innerHTML +=`
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${blogs[i].image}" alt="" />
            </div>
            <div class="blog-content">
            
            <h1>
                <a href="blog-detail.html" target="_blank">
                    ${blogs[i].title}
                </a>
            </h1>
           
            <div class="duration">
             Duration : ${getDayDifference(blogs[i].startdate, blogs[i].enddate)} 
            </div>
            <p>
                ${blogs[i].content}
            </p> 

            <div class="OSicon">
            `+ getLogo +`
           </div>
           
            <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
            </div>
            <div style="text-align: right;">
              <span style="color: grey; font-size: 15px;">
              ${getDistanceTime(blogs[i].postedAt)}
              </br>
              </span>
              <span style="color: grey; font-size: 20px; font-weight: 500">

              </span>
            </div>
            </div>
        </div>
        `
  }
}


function getFullTime(time) {

  const date = time.getDate()
  const monthIndex = time.getMonth()
  const year = time.getFullYear()

  const hours = time.getHours()
  const minutes = time.getMinutes()


  return `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`
}

function getDistanceTime(time) {
 
  const distance = new Date() - new Date(time)
  
  var miliseconds = 1000
  var secondInMinute = 60
  var minutesInHour = 60
  var secondsInHour = secondInMinute * minutesInHour
  var hoursInDay = 23

  let dayDistance = distance / (miliseconds * secondsInHour * hoursInDay)
  if (dayDistance >= 1) {
    const time = Math.floor(dayDistance) + ' a day ago'
    console.log("time " + time);
    return time
  } else {
   
    let hourDistance = Math.floor(distance / (miliseconds * secondsInHour))
    if (hourDistance > 0) {
      return hourDistance + ' hour ago'
    } else {
      
      const minuteDistance = Math.floor(distance / (miliseconds * secondInMinute))
      return minuteDistance + ' minute ago'
    }
  }

}

function getDayDifference(start,end) {
  const date1 = new Date(start) 
  const date2 = new Date(end)
  
  const diffTime = Math.abs(date2 - date1);
  
  
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    if (diffDays < 30) {
      return diffDays + ` days`
  } else {
    let diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
       if (diffMonths >=1) {
        return diffMonths + ` month`
  }
       
  }

}


function firstContent() {
    return`
    <div class="blog-list-item">
    <div class="blog-image">
      <img src="assets/blog-img.png" alt="" />
    </div>
    <div class="blog-content">
      
      <h1>
        <a href="blog-detail.html" target="_blank"
          >Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a
        >
      </h1>
      <div class="duration">
              Durasi : 3 bulan
      </div>
      <p>
        Ketimpangan sumber daya manusia (SDM) di sektor digital masih
        menjadi isu yang belum terpecahkan. Berdasarkan penelitian
        ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
        meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Quam, molestiae
        numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
        eligendi debitis?
      </p>
      <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-post">Post Blog</button>
      </div>
    </div>
  </div>`
    
}



setInterval(function () {
  renderBlog()
}, 2000)