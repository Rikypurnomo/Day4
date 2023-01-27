let data = []

function addData(event) {
    event.preventDefault ()

    // Deklarasi variable sama dom buat nangkap value nya
    let projectName = document.getElementById("project_name").value
    let startDate = document.getElementById("start_date").value
    let endDate = document.getElementById("end_date").value
    let description = document.getElementById("description").value
    let nodeJS = document.getElementById("nodejs")
    let reactJS = document.getElementById("reactjs")
    let nextJS = document.getElementById("nextjs")
    let typeScript = document.getElementById("typescript")
    let uploadImage = document.getElementById("upload_image").files
    let imageURL = URL.createObjectURL(uploadImage[0])

    //Deklarasi variable buat icon technology
    let nodeJSImg = ''
    let reactJSImg = ''
    let nextJSImg = ''
    let typeScriptImg = ''

    //Pengkondisian buat masukin img icon ke variable 
    if (nodeJS.checked == true) {
        nodeJSImg = '/images/node-js-icon.svg'
    }
    if (reactJS.checked == true) {
        reactJSImg = '/images/react-js-icon.svg'
    }
    if (nextJS.checked == true) {
        nextJSImg = '/images/nextjs-icon.svg'
    }
    if (typeScript.checked == true) {
        typeScriptImg = '/images/typescript-icon.svg'
    }

    //Ngedeklare variable project
    let project = {
        projectName : projectName,
        startDate : startDate,
        endDate : endDate,
        description : description,
        imageURL : imageURL,
        nodeJSImg,
        reactJSImg,
        nextJSImg,
        typeScriptImg
    }

    //Ngepush value yang ada di project ke data
    data.push(project)
    renderBlog()
    console.log(data.length)
}

//Mengrender data yang telah kita submit
function renderBlog() {
    document.getElementById('projects').innerHTML = ``
// Loop
for (let index = 0; index < data.length; index++) {
    document.getElementById('projects').innerHTML += `
    <a href="/project-detail.html" class="card-project">
        <div class="cover_image">
            <img src="${data[index].imageURL}" alt="">
        </div>
        <div class="card-content">
            <div class="project-name">
                <h3>${data[index].projectName}</h3>
                <h4>Duration: ${getDuration(data[index].startDate, data[index].endDate)}</h4>
            </div>
            <div class="card-text">
                <p>${data[index].description}</p>
            </div>
            <div class="tech_icon">
                <img src="${data[index].nodeJSImg}">
                <img src="${data[index].reactJSImg}">
                <img src="${data[index].nextJSImg}">
                <img src="${data[index].typeScriptImg}">
            </div>
            <div class="btn-card">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    </a>`
}
}

function getDuration(startDate, endDate) {
    let proStart = new Date(startDate)
    let proEnd = new Date(endDate)

    let distance = proEnd - proStart

    let monthDistance = Math.floor(distance / (30 * 24 * 60 * 60 * 1000))
    if (monthDistance != 0) {
        return monthDistance + ' month'
    } else {
        let weekDistance = Math.floor(distance / (7 * 24 * 60 * 60 * 1000))
        if (weekDistance != 0) {
            return weekDistance + ' weeks'
        } else {
            let daysDistance = Math.floor(distance / (24 * 60 * 60 * 1000))
            if (daysDistance != 0) {
                return daysDistance + ' Days Ago'
            } else {
                let hoursDistance = Math.floor(distance / (60 * 60 * 1000))
                if (hoursDistance != 0) {
                    return hoursDistance + ' Hours Ago'
                } else {
                    let minuteDistance = Math.floor(distance / (60 * 1000))
                    if (minuteDistance != 0) {
                        return minuteDistance + ' Minutes Ago'
                    } else {
                        let secondDistance = Math.floor(distance / 1000)
                        if (secondDistance != 0)
                            return secondDistance + ' sec'
                    }
                }
            }
        }
    }
}