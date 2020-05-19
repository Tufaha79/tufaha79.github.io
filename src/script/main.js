"use strict"

const KEY_ENTER = 13
let name = ""
let age = ""
let images = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12", "img13", "img14", "img15", "img16", "img17",
"img18", "img19", "img20", "img21", "img22", "img23", "img24", "img25", "img26", "img27", "img28", "img29", "img30", "img31", "img32", "img33", "img34", "img35", "img36", "img37"]
let img = ""
let x = ""
let term = 0
let counter = 0
let taskscollection = {
  easy_plus: [ {problem: "14 + 7"},
                               {problem: "20 + 3"},
                               {problem: "24 + 13"},
                               {problem: "18 + 13"},
                               {problem: "19 + 8"},
                               {problem: "23 + 13"},
                               {problem: "18 + 17"},
                               {problem: "21 + 14"},
                               {problem: "17 + 25"},
                               {problem: "16 + 18"},
                               {problem: "22 + 19"},
                               {problem: "15 + 16"},
                               {problem: "23 + 14"},
                               {problem: "23 + 18"},
                               {problem: "12 + 27"},
                               {problem: "14 + 23"},
                               {problem: "21 + 9"},
                               {problem: "18 + 14"},
                               {problem: "15 + 8"},
                               {problem: "16 + 9"},
                               {problem: "20 + 11"},
                               {problem: "12 + 9"},
                               {problem: "14 + 11"},
                               {problem: "2 + 24"},
                               {problem: "20 + 13"},

  ],

  easy_minus: [ {problem: "21 - 8"},
                               {problem: "20 - 3"},
                               {problem: "24 - 13"},
                               {problem: "18 - 13"},
                               {problem: "19 - 8"},
                               {problem: "23 - 13"},
                               {problem: "18 - 17"},
                               {problem: "21 - 14"},
                               {problem: "37 - 25"},
                               {problem: "26 - 18"},
                               {problem: "22 - 19"},
                               {problem: "25 - 16"},
                               {problem: "23 - 14"},
                               {problem: "23 - 18"},
                               {problem: "12 - 7"},
                               {problem: "14 - 8"},
                               {problem: "21 - 9"},
                               {problem: "18 - 7"},
                               {problem: "15 - 8"},
                               {problem: "16 - 9"},
                               {problem: "20 - 11"},
                               {problem: "12 - 9"},
                               {problem: "14 - 11"},
                               {problem: "24 - 17"},
                               {problem: "20 - 13"},


  ],

  easy_multiplied: [ {problem: "4 * 7"},
                             {problem: "20 * 3"},
                             {problem: "4 * 13"},
                             {problem: "8 * 3"},
                             {problem: "9 * 8"},
                             {problem: "23 * 3"},
                             {problem: "8 * 7"},
                             {problem: "2 * 14"},
                             {problem: "7 * 5"},
                             {problem: "6 * 8"},
                             {problem: "2 * 19"},
                             {problem: "15 * 6"},
                             {problem: "3 * 14"},
                             {problem: "13 * 8"},
                             {problem: "12 * 7"},
                             {problem: "11 * 3"},
                             {problem: "6 * 9"},
                             {problem: "8 * 4"},
                             {problem: "15 * 4"},
                             {problem: "7 * 9"},
                             {problem: "2 * 11"},
                             {problem: "12 * 5"},
                             {problem: "14 * 11"},
                             {problem: "2 * 24"},
                             {problem: "20 * 13"},
  ],

  easy_divided:  [ {problem: "63 / 9"},
                               {problem: "260 / 13"},
                               {problem: "81 / 9"},
                               {problem: "64 / 8"},
                               {problem: "49 / 7"},
                               {problem: "144 / 12"},
                               {problem: "36 / 4"},
                               {problem: "72 / 12"},
                               {problem: "72 / 9"},
                               {problem: "45 / 5"},
                               {problem: "48 / 8"},
                               {problem: "25 / 5"},
                               {problem: "44 / 4"},
                               {problem: "28 / 7"},
                               {problem: "24 / 4"},
                               {problem: "36 / 6"},
                               {problem: "56 / 7"},
                               {problem: "18 / 3"},
                               {problem: "9 / 3"},
                               {problem: "100 / 10"},
                               {problem: "14 / 7"},
                               {problem: "40 / 8"},
                               {problem: "12 / 4"},
                               {problem: "27 / 9"},
                               {problem: "18 / 2"},


  ],

  easy_all: [ {problem: "4 * 7"},
                               {problem: "28 / 7"},
                               {problem: "23 - 18"},
                               {problem: "18 + 13"},
                               {problem: "40 / 8"},
                               {problem: "13 * 8"},
                               {problem: "24 - 17"},
                               {problem: "21 + 14"},
                               {problem: "72 / 9"},
                               {problem: "12 * 5"},
                               {problem: "22 + 19"},
                               {problem: "23 - 17"},
                               {problem: "36 / 4"},
                               {problem: "23 * 3"},
                               {problem: "12 + 27"},
                               {problem: "37 - 25"},
                               {problem: "144 / 12"},
                               {problem: "12 * 7"},
                               {problem: "16 - 9"},
                               {problem: "16 + 9"},
                               {problem: "25 / 5"},
                               {problem: "4 * 13"},
                               {problem: "14 + 11"},
                               {problem: "26 - 18"},
                               {problem: "8 * 3"},


  ],

  medium_plus: [ {problem: "114 + 15"},
                               {problem: "120 + 215"},
                               {problem: "241 + 93"},
                               {problem: "141 + 12"},
                               {problem: "45 + 118"},
                               {problem: "23 + 213"},
                               {problem: "18 + 216"},
                               {problem: "19 + 74"},
                               {problem: "14 + 96"},
                               {problem: "19 + 83"},
                               {problem: "87 + 19"},
                               {problem: "22 + 75"},
                               {problem: "23 + 84"},
                               {problem: "89 + 18"},
                               {problem: "12 + 67"},
                               {problem: "14 + 23"},
                               {problem: "73 + 18"},
                               {problem: "12 + 69"},
                               {problem: "13 + 58"},
                               {problem: "16 + 84"},
                               {problem: "67 + 17"},
                               {problem: "13 + 89"},
                               {problem: "14 + 77"},
                               {problem: "13 + 68"},
                               {problem: "24 + 83"},
                               {problem: "87 + 13"},
                               {problem: "47 + 38"},
                               {problem: "18 + 48"},
                               {problem: "74 + 16"},
                               {problem: "11 + 67"},
                               {problem: "19 + 83"},
                               {problem: "17 + 48"},
                               {problem: "69 + 13"},
                               {problem: "12 + 34"},
                               {problem: "11 + 45"},
                               {problem: "43 + 15"},
  ],

  medium_minus:  [ {problem: "114 - 15"},
                               {problem: "320 - 215"},
                               {problem: "241 - 93"},
                               {problem: "141 - 12"},
                               {problem: "45 - 18"},
                               {problem: "123 - 13"},
                               {problem: "118 - 96"},
                               {problem: "129 - 84"},
                               {problem: "114  76"},
                               {problem: "119 - 63"},
                               {problem: "88 - 19"},
                               {problem: "122 - 95"},
                               {problem: "203 - 84"},
                               {problem: "128 - 79"},
                               {problem: "102 - 87"},
                               {problem: "104 - 23"},
                               {problem: "113 - 78"},
                               {problem: "132 - 48"},
                               {problem: "131 - 98"},
                               {problem: "165 - 49"},
                               {problem: "127 - 58"},
                               {problem: "123 - 99"},
                               {problem: "141 - 77"},
                               {problem: "100 - 48"},
                               {problem: "204 - 139"},
                               {problem: "170 - 68"},
                               {problem: "117 - 89"},
                               {problem: "108 - 8"},
                               {problem: "145 - 96"},
                               {problem: "111 - 87"},
                               {problem: "191 - 68"},
                               {problem: "163 - 98"},
                               {problem: "129 - 57"},
                               {problem: "112 - 49",},
                               {problem: "111 - 85"},
                               {problem: "132 - 75"},
  ],

  medium_multiplied: [ {problem: "14 * 15"},
                               {problem: "20 * 15"},
                               {problem: "24 * 3"},
                               {problem: "14 * 12"},
                               {problem: "4 * 18"},
                               {problem: "23 * 13"},
                               {problem: "18 * 6"},
                               {problem: "19 * 4"},
                               {problem: "14 * 6"},
                               {problem: "19 * 13"},
                               {problem: "8 * 19"},
                               {problem: "22 * 5"},
                               {problem: "23 * 4"},
                               {problem: "8 * 18"},
                               {problem: "12 * 7"},
                               {problem: "14 * 23"},
                               {problem: "3 * 18"},
                               {problem: "12 * 9"},
                               {problem: "13 * 8"},
                               {problem: "16 * 4"},
                               {problem: "7 * 17"},
                               {problem: "13 * 9"},
                               {problem: "14 * 7"},
                               {problem: "13 * 8"},
                               {problem: "24 * 3"},
                               {problem: "17 * 13"},
                               {problem: "7 * 8"},
                               {problem: "18 * 8"},
                               {problem: "4 * 16"},
                               {problem: "11 * 7"},
                               {problem: "19 * 3"},
                               {problem: "17 * 8"},
                               {problem: "9 * 13"},
                               {problem: "12 * 4"},
                               {problem: "11 * 15"},
                               {problem: "13 * 15"},
  ],

  medium_divided: [ {problem: "72 / 18"},
                               {problem: "136 / 8"},
                               {problem: "120 / 15"},
                               {problem: "144 / 12"},
                               {problem: "144 / 9"},
                               {problem: "126 / 14"},
                               {problem: "96 / 16"},
                               {problem: "196 / 14"},
                               {problem: "108 / 6"},
                               {problem: "72 / 18"},
                               {problem: "84 / 6"},
                               {problem: "225 / 25"},
                               {problem: "171 / 19"},
                               {problem: "256 / 16"},
                               {problem: "238 / 17"},
                               {problem: "238 / 14"},
                               {problem: "266 / 19"},
                               {problem: "195 / 15"},
                               {problem: "120 / 8"},
                               {problem: "165 / 15"},
                               {problem: "304 / 16"},
                               {problem: "361 / 19"},
                               {problem: "224 / 14"},
                               {problem: "154 / 14"},
                               {problem: "247 / 19"},
                               {problem: "117 / 13"},
                               {problem: "128 / 16"},
                               {problem: "108 / 18"},
                               {problem: "153 / 9"},
                               {problem: "112 / 16"},
                               {problem: "195 / 3"},
                               {problem: "17 / 9"},
                               {problem: "162 / 18"},
                               {problem: "98 / 14"},
                               {problem: "68 / 4"},
                               {problem: "135 / 15"},
  ],

  medium_all: [ {problem: "147 + 35"},
                               {problem: "20 * 15"},
                               {problem: "244 - 13"},
                               {problem: "144 / 12"},
                               {problem: "469 - 218"},
                               {problem: "23 * 13"},
                               {problem: "18 + 167"},
                               {problem: "196 / 14"},
                               {problem: "149 - 86"},
                               {problem: "19 * 13"},
                               {problem: "28 + 219"},
                               {problem: "225 / 25"},
                               {problem: "238 + 144"},
                               {problem: "28 + 218"},
                               {problem: "312 - 247"},
                               {problem: "14 * 23"},
                               {problem: "93 + 58"},
                               {problem: "267 - 98"},
                               {problem: "120 / 8"},
                               {problem: "116 + 24"},
                               {problem: "260 - 117"},
                               {problem: "361 / 19"},
                               {problem: "14 * 7"},
                               {problem: "93 - 28"},
                               {problem: "24 + 213"},
                               {problem: "117 / 13"},
                               {problem: "67 + 78"},
                               {problem: "108 / 18"},
                               {problem: "84 + 67"},
                               {problem: "231 - 67"},
                               {problem: "195 / 3"},
                               {problem: "17 * 8"},
                               {problem: "84 - 49"},
                               {problem: "124 + 49"},
                               {problem: "11 * 15"},
                               {problem: "135 / 15"},
  ],

  hard_plus: [ {problem: "134 + 237"},
                               {problem: "207 + 153"},
                               {problem: "244 + 813"},
                               {problem: "198 + 213"},
                               {problem: "169 + 218"},
                               {problem: "283 + 413"},
                               {problem: "189 + 167"},
                               {problem: "281 + 114"},
                               {problem: "147 + 325"},
                               {problem: "136 + 118"},
                               {problem: "282 + 219"},
                               {problem: "145 + 416"},
                               {problem: "238 + 144"},
                               {problem: "283 + 218"},
                               {problem: "312 + 247"},
                               {problem: "142 + 223"},
                               {problem: "211 + 946"},
                               {problem: "118 + 174"},
                               {problem: "155 + 819"},
                               {problem: "116 + 924"},
                               {problem: "260 + 117"},
                               {problem: "132 + 946"},
                               {problem: "147 + 151"},
                               {problem: "226 + 244"},
                               {problem: "240 + 213"},
                               {problem: "270 + 317"},
                               {problem: "432 + 246"},
                               {problem: "149 + 258"},
                               {problem: "248 + 274"},
                               {problem: "340 + 118"},
                               {problem: "159 + 357"},
                               {problem: "326 + 154"},
                               {problem: "157 + 654"},
                               {problem: "123 + 951"},
                               {problem: "321 + 145"},
                               {problem: "145 + 936"},
                               {problem: "741 + 145"},
                               {problem: "142 + 346"},
                               {problem: "346 + 246"},
                               {problem: "147 + 249"},
                               {problem: "195 + 349"},
                               {problem: "426 + 248"},
                               {problem: "654 + 741"},
                               {problem: "439 + 739"},
                               {problem: "246 + 279"},
                               {problem: "197 + 724"},
                               {problem: "249 + 379"},
                               {problem: "176 + 276"},
                               {problem: "439 + 289"},

  ],

  hard_minus: [ {problem: "734 - 237"},
                               {problem: "207 - 153"},
                               {problem: "744 - 513"},
                               {problem: "498 - 213"},
                               {problem: "369 - 218"},
                               {problem: "783 - 413"},
                               {problem: "289 - 167"},
                               {problem: "281 - 114"},
                               {problem: "447 - 325"},
                               {problem: "236 - 118"},
                               {problem: "282 - 219"},
                               {problem: "145 - 116"},
                               {problem: "238 - 144"},
                               {problem: "283 - 218"},
                               {problem: "312 - 247"},
                               {problem: "342 - 223"},
                               {problem: "711 - 546"},
                               {problem: "318 - 174"},
                               {problem: "455 - 219"},
                               {problem: "516 - 324"},
                               {problem: "260 - 117"},
                               {problem: "132 - 46"},
                               {problem: "247 - 151"},
                               {problem: "526 - 244"},
                               {problem: "240 - 213"},
                               {problem: "270 - 117"},
                               {problem: "432 - 246"},
                               {problem: "449 - 258"},
                               {problem: "248 - 174"},
                               {problem: "340 - 118"},
                               {problem: "459 - 157"},
                               {problem: "326 - 154"},
                               {problem: "157 - 54"},
                               {problem: "123 - 51"},
                               {problem: "321 - 145"},
                               {problem: "545 - 236"},
                               {problem: "741 - 145"},
                               {problem: "342 - 146"},
                               {problem: "346 - 246"},
                               {problem: "447 - 249"},
                               {problem: "290 - 145"},
                               {problem: "426 - 248"},
                               {problem: "654 - 341"},
                               {problem: "439 - 239"},
                               {problem: "246 - 179"},
                               {problem: "497 - 124"},
                               {problem: "449 - 179"},
                               {problem: "376 - 276"},
                               {problem: "439 - 289"},

  ],

  hard_multiplied: [ {problem: "13 * 23"},
                               {problem: "27 * 15"},
                               {problem: "24 * 13"},
                               {problem: "19 * 21"},
                               {problem: "16 * 18"},
                               {problem: "23 * 13"},
                               {problem: "19 * 16"},
                               {problem: "18 * 14"},
                               {problem: "14 * 25"},
                               {problem: "13 * 18"},
                               {problem: "22 * 19"},
                               {problem: "14 * 16"},
                               {problem: "23 * 14"},
                               {problem: "3 * 218"},
                               {problem: "11 * 27"},
                               {problem: "14 * 22"},
                               {problem: "11 * 16"},
                               {problem: "18 * 17"},
                               {problem: "15 * 19"},
                               {problem: "16 * 24"},
                               {problem: "26 * 17"},
                               {problem: "13 * 26"},
                               {problem: "14 * 15"},
                               {problem: "26 * 24"},
                               {problem: "24 * 21"},
                               {problem: "27 * 3"},
                               {problem: "21 * 24"},
                               {problem: "14 * 15"},
                               {problem: "24 * 12"},
                               {problem: "19 * 18"},
                               {problem: "15 * 17"},
                               {problem: "23 * 14"},
                               {problem: "17 * 18"},
                               {problem: "12 * 14"},
                               {problem: "18 * 15"},
                               {problem: "14 * 25"},
                               {problem: "13 * 15"},
                               {problem: "14 * 23"},
                               {problem: "26 * 17"},
                               {problem: "14 * 22"},
                               {problem: "19 * 9"},
                               {problem: "26 * 8"},
                               {problem: "15 * 21"},
                               {problem: "18 * 17"},
                               {problem: "21 * 17"},
                               {problem: "19 * 24"},
                               {problem: "24 * 13"},
                               {problem: "17 * 26"},
                               {problem: "9 * 28"},

  ],

  hard_divided: [ {problem: "288 / 18"},
                               {problem: "153 / 9"},
                               {problem: "198 / 18"},
                               {problem: "289 / 17"},
                               {problem: "216 / 12"},
                               {problem: "128 / 16"},
                               {problem: "136 / 8"},
                               {problem: "361 / 19"},
                               {problem: "289 / 17"},
                               {problem: "176 / 16"},
                               {problem: "192 / 16"},
                               {problem: "238 / 14"},
                               {problem: "252 / 18"},
                               {problem: "153 / 9"},
                               {problem: "247 / 13"},
                               {problem: "156 / 16"},
                               {problem: "247 / 13"},
                               {problem: "306 / 18"},
                               {problem: "187 / 17"},
                               {problem: "96 / 6"},
                               {problem: "132 / 12"},
                               {problem: "304 / 19"},
                               {problem: "209 / 11"},
                               {problem: "288 / 16"},
                               {problem: "228 / 19"},
                               {problem: "225 / 15"},
                               {problem: "156 / 12"},
                               {problem: "112 / 7"},
                               {problem: "119 / 17"},
                               {problem: "112 / 8"},
                               {problem: "171 / 19"},
                               {problem: "221 / 13"},
                               {problem: "133 / 7"},
                               {problem: "234 / 13"},
                               {problem: "136 / 8"},
                               {problem: "324 / 18"},
                               {problem: "270 / 15"},
                               {problem: "152 / 8"},
                               {problem: "304 / 19"},
                               {problem: "238 / 17"},
                               {problem: "255 / 15"},
                               {problem: "247 / 13"},
                               {problem: "238 / 14"},
                               {problem: "187 / 11"},
                               {problem: "183 / 14"},
                               {problem: "240 / 16"},
                               {problem: "272 / 17"},
                               {problem: "322 / 23"},
                               {problem: "342 / 18"},

  ],

  hard_all: [ {problem: "134 + 237"},
                               {problem: "783 - 413"},
                               {problem: "247 / 13"},
                               {problem: "26 * 8"},
                               {problem: "169 + 218"},
                               {problem: "321 - 145"},
                               {problem: "255 / 15"},
                               {problem: "19 * 9"},
                               {problem: "147 + 325"},
                               {problem: "432 - 246"},
                               {problem: "304 / 19"},
                               {problem: "145 + 416"},
                               {problem: "318 - 174"},
                               {problem: "24 * 12"},
                               {problem: "238 / 14"},
                               {problem: "142 + 223"},
                               {problem: "447 - 325"},
                               {problem: "24 * 21"},
                               {problem: "288 / 16"},
                               {problem: "116 + 924"},
                               {problem: "497 - 124"},
                               {problem: "19 * 21"},
                               {problem: "342 / 18"},
                               {problem: "248 + 274"},
                               {problem: "289 - 167"},
                               {problem: "27 * 15"},
                               {problem: "209 / 11"},
                               {problem: "340 + 118"},
                               {problem: "449 - 179"},
                               {problem: "24 * 21"},
                               {problem: "221 / 13"},
                               {problem: "326 + 154"},
                               {problem: "711 - 546"},
                               {problem: "18 * 15"},
                               {problem: "192 / 16"},
                               {problem: "145 + 936"},
                               {problem: "289 - 167"},
                               {problem: "26 * 8"},
                               {problem: "322 / 23"},
                               {problem: "147 + 249"},
                               {problem: "132 - 46"},
                               {problem: "26 * 17"},
                               {problem: "306 / 18"},
                               {problem: "439 + 739"},
                               {problem: "342 - 146"},
                               {problem: "14 * 22"},
                               {problem: "133 / 7"},
                               {problem: "176 + 276"},
                               {problem: "447 - 249"},

  ]

}


document.addEventListener("DOMContentLoaded", () => {

  const age_enter = document.querySelector(".age")
  const name_enter = document.querySelector(".name")
  const nav_main = document.querySelector(".main")
  const nav_tasks = document.querySelector(".navigation")
  const user = document.querySelector(".user_login")
  const container = document.querySelector(".container")
  const task_greeting = document.querySelector(".task_greeting")
  const footer = document.getElementById("footer")
  const plus_link = document.querySelector(".plus_link")
  const minus_link = document.querySelector(".minus_link")
  const multiplied_link = document.querySelector(".multiplied_link")
  const divided_link = document.querySelector(".divided_link")
  const all_link = document.querySelector(".all_link")


  name_enter.addEventListener("keypress", (event) => {
    name = name_enter.value
    if (event.which === KEY_ENTER) {
      name_enter.parentElement.children[0].style.display = "none"
      name_enter.style.display = "none"
      age_enter.parentElement.children[4].style.visibility = "visible"
      age_enter.style.visibility = "visible"
      age_enter.focus()
    }
  })

  age_enter.addEventListener("keypress", (event) => {

    if (event.which === KEY_ENTER) {
      user.style.display = "none"
      age = age_enter.value
      nav_main.style.display = "none"
      nav_tasks.style.visibility = "visible"
      nav_tasks.parentElement.children[3].children[0].innerText = "Hello, " + name + " !"
      nav_tasks.parentElement.children[3].style.visibility = "visible"
      nav_tasks.parentElement.children[4].style.visibility = "visible"
    }
  })

  nav_tasks.parentElement.children[4].addEventListener("click", () => {

    window.location.href = window.location.href

  })

  plus_link.addEventListener("click", () => {

    let difficulty = getDifficulty(age)
    nav_tasks.parentElement.children[4].style.display = "none"
    task_greeting.children[0].innerText = "Let's go, " + name + " !"
    drawTaskBoard()
    let difficulty_tasks = getDifficultyTasks() + "_" + "plus"
    difficulty(taskscollection[difficulty_tasks])

  })

  minus_link.addEventListener("click", () => {

    let difficulty = getDifficulty(age)
    nav_tasks.parentElement.children[4].style.display = "none"
    task_greeting.children[0].innerText = "Keep up the good work, " + name + " !"
    drawTaskBoard()
    let difficulty_tasks = getDifficultyTasks() + "_" + "minus"
    difficulty(taskscollection[difficulty_tasks])

  })


  multiplied_link.addEventListener("click", () => {

    let difficulty = getDifficulty(age)
    nav_tasks.parentElement.children[4].style.display = "none"
    task_greeting.children[0].innerText = "You're doing a good job, " + name + " !"
    drawTaskBoard()
    let difficulty_tasks = getDifficultyTasks() + "_" + "multiplied"
    difficulty(taskscollection[difficulty_tasks])

  })


  divided_link.addEventListener("click", () => {

    let difficulty = getDifficulty(age)
    nav_tasks.parentElement.children[4].style.display = "none"
    task_greeting.children[0].innerText = "You almost made it, " + name + " !"
    drawTaskBoard()
    let difficulty_tasks = getDifficultyTasks() + "_" + "divided"
    difficulty(taskscollection[difficulty_tasks])

  })

  all_link.addEventListener("click", () => {

    let difficulty = getDifficulty(age)
    nav_tasks.parentElement.children[4].style.display = "none"
    task_greeting.children[0].innerText = "And now we repeat some tasks, " + name + " !"
    drawTaskBoard()
    let difficulty_tasks = getDifficultyTasks() + "_" + "all"
    difficulty(taskscollection[difficulty_tasks])

  })


  footer.children[0].addEventListener("click", () => {
    window.location.href = window.location.href
  })


  let img = images[Math.floor(Math.random() * images.length)]

  function easy (tasks) {

    tasks = shuffle(tasks)
    calculation(tasks)
    let task_index = 0
    if(tasks !== taskscollection.easy_all) {

      for (let x = 0; x < tasks.length / 5; x++) {

      let row = document.createElement("div")
      row.classList.add("row")
      for (let a = 0; a<5; a++) {

        let task = tasks[task_index]
        const col_1 = document.createElement("div")
        col_1.classList.add("col-1")
        const task_container = document.createElement("div")
        task_container.classList.add("task")
        const h1 = document.createElement("h1")
        h1.textContent = task.problem + " ="
        const div_bnt = document.createElement("div")
        div_bnt.classList.add("div-bnt")

        let task_option = [task.solution, task.solution + 1, task.solution - 1]
        let btn_options = shuffle(task_option)

        const btn_option1 = document.createElement("button")
        btn_option1.classList.add("easy_btn")
        btn_option1.textContent = btn_options[0]
        div_bnt.appendChild(btn_option1)

        const btn_option2 = document.createElement("button")
        btn_option2.classList.add("easy_btn")
        btn_option2.textContent = btn_options[1]
        div_bnt.appendChild(btn_option2)

        const btn_option3 = document.createElement("button")
        btn_option3.classList.add("easy_btn")
        btn_option3.textContent = btn_options[2]
        div_bnt.appendChild(btn_option3)



        task_container.appendChild(h1)
        task_container.appendChild(div_bnt)


        btn_option1.addEventListener("click", () => {
          if (parseInt(btn_option1.textContent) === task.solution) {
            btn_option1.parentElement.parentElement.style.display = "none"
          } else {alert ("Try again")}
        })

        btn_option2.addEventListener("click", () => {
          if (parseInt(btn_option2.textContent) === task.solution) {
            btn_option2.parentElement.parentElement.style.display = "none"
          } else {alert ("Try again")}
        })

        btn_option3.addEventListener("click", () => {
          if (parseInt(btn_option3.textContent) === task.solution) {
            btn_option3.parentElement.parentElement.style.display = "none"
          } else {alert ("Try again")}
        })

        col_1.appendChild(task_container)

        row.appendChild(col_1)

        task_index++;
      }

      container.appendChild(row)
      img = images[Math.floor(Math.random() * images.length)]
      container.classList = ""
      container.classList.add(img)
    }

    } else {


      for (let x = 0; x < tasks.length / 5; x++) {

      let row = document.createElement("div")
      row.classList.add("row")
      for (let a = 0; a<5; a++) {

        let task = tasks[task_index]

        const col_1 = document.createElement("div")
        col_1.classList.add("col-1")
        const task_container = document.createElement("div")
        task_container.classList.add("task")
        task_container.setAttribute("data-list", "task_" + task_index)
        const h1 = document.createElement("h1")
        h1.textContent = task.problem + " ="
        const div_bnt = document.createElement("div")
        div_bnt.classList.add("div-bnt")
        const input = document.createElement("input")
        input.classList.add("easy_inp")


        div_bnt.appendChild(input)

        task_container.appendChild(h1)
        task_container.appendChild(div_bnt)

        input.addEventListener("keypress", (event) => {

          if (event.which === KEY_ENTER) {

            counter++
            const sol = parseInt(input.value,10)

            if (sol === task.solution) {
              input.parentElement.parentElement.style.display = "none"

            } else {

                if (counter <= 2 ) {alert("Try again")
              }else {
                input.style.display = "none"
                let task_option = [task.solution, task.solution + 1, task.solution - 1]
                let btn_options = shuffle(task_option)

                const btn_option1 = document.createElement("button")
                btn_option1.classList.add("easy_btn")
                btn_option1.textContent = btn_options[0]

                const btn_option2 = document.createElement("button")
                btn_option2.classList.add("easy_btn")
                btn_option2.textContent = btn_options[1]

                const btn_option3 = document.createElement("button")
                btn_option3.classList.add("easy_btn")
                btn_option3.textContent = btn_options[2]

                input.parentElement.appendChild(btn_option1)
                input.parentElement.appendChild(btn_option2)
                input.parentElement.appendChild(btn_option3)

                btn_option1.addEventListener("click", () => {
                  if (parseInt(btn_option1.textContent) === task.solution) {
                    btn_option1.parentElement.parentElement.style.display = "none"
                  }else {alert ("Trai again")}
                })

                btn_option2.addEventListener("click", () => {
                  if (parseInt(btn_option2.textContent) === task.solution) {
                    btn_option2.parentElement.parentElement.style.display = "none"
                  }else {alert ("Trai again")}
                })

                btn_option3.addEventListener("click", () => {
                  if (parseInt(btn_option3.textContent) === task.solution) {
                    btn_option3.parentElement.parentElement.style.display = "none"
                  }else {alert ("Trai again")}
                })

              }

        }
      }

    })


        col_1.appendChild(task_container)

        row.appendChild(col_1)

        task_index++;
      }

      container.appendChild(row)
      img = images[Math.floor(Math.random() * images.length)]
      container.classList = ""
      container.classList.add(img)
    }


   }

    footer.style.visibility = "visible"

  }


  function medium (tasks) {

    tasks = shuffle(tasks)
    calculation(tasks)
    let task_index = 0


    for (let x = 0; x < tasks.length / 6; x++) {

      let row = document.createElement("div")
      row.classList.add("row")
      for (let a = 0; a<6; a++) {
        let task = tasks[task_index]

        const col_2 = document.createElement("div")
        col_2.classList.add("col-2")
        const task_container = document.createElement("div")
        task_container.classList.add("task")
        const h2 = document.createElement("h2")
        h2.textContent = task.problem + " ="
        const div_bnt = document.createElement("div")
        div_bnt.classList.add("div-bnt")
        const input = document.createElement("input")
        input.classList.add("medium_inp")


        let task_option = [task.solution, task.solution + 1, task.solution - 1]
        let btn_options = shuffle(task_option)

        const btn_option1 = document.createElement("button")
        btn_option1.classList.add("medium_btn")
        btn_option1.textContent = btn_options[0]

        const btn_option2 = document.createElement("button")
        btn_option2.classList.add("medium_btn")
        btn_option2.textContent = btn_options[1]

        const btn_option3 = document.createElement("button")
        btn_option3.classList.add("medium_btn")
        btn_option3.textContent = btn_options[2]

        if (x <= 2) {
        div_bnt.appendChild(btn_option1)
        div_bnt.appendChild(btn_option2)
        div_bnt.appendChild(btn_option3)

        } else {
        div_bnt.appendChild(input)

        }
        task_container.appendChild(h2)
        task_container.appendChild(div_bnt)


        btn_option1.addEventListener("click", () => {
          if (parseInt(btn_option1.textContent) === task.solution) {
            btn_option1.parentElement.parentElement.style.display = "none"
          }else {alert ("Trai again")}
        })

        btn_option2.addEventListener("click", () => {
          if (parseInt(btn_option2.textContent) === task.solution) {
            btn_option2.parentElement.parentElement.style.display = "none"
          }else {alert ("Trai again")}
        })

        btn_option3.addEventListener("click", () => {
          if (parseInt(btn_option3.textContent) === task.solution) {
            btn_option3.parentElement.parentElement.style.display = "none"
          }else {alert ("Trai again")}
        })

        input.addEventListener("keypress", (event) => {

          if (event.which === KEY_ENTER) {

            counter++
            const sol = parseInt(input.value,10)

            if (sol === task.solution) {
              input.parentElement.parentElement.style.display = "none"

            } else {
              if (counter <= 2 ) {
                alert("Try again")
              } else {
                input.style.display = "none"
                div_bnt.appendChild(btn_option1)
                div_bnt.appendChild(btn_option2)
                div_bnt.appendChild(btn_option3)
              }
        }
      }

      })


        col_2.appendChild(task_container)

        row.appendChild(col_2)

        task_index++;
      }

      container.appendChild(row)
      img = images[Math.floor(Math.random() * images.length)]
      container.classList = ""
      container.classList.add(img)
    }

   footer.style.visibility = "visible"
  }



  function hard (tasks) {
    tasks = shuffle(tasks)
    calculation(tasks)
    let task_index = 0
    for (let x = 0; x < tasks.length / 7; x++) {

      let row = document.createElement("div")
      row.classList.add("row")
      for (let a = 0; a<7; a++) {
        let task = tasks[task_index]

        const col_3 = document.createElement("div")
        col_3.classList.add("col-3")
        const task_container = document.createElement("div")
        task_container.classList.add("task")
        const h3 = document.createElement("h3")
        h3.textContent = task.problem + " ="
        const div_bnt = document.createElement("div")
        div_bnt.classList.add("div-bnt")
        const input = document.createElement("input")
        input.classList.add("hard_inp")


        div_bnt.appendChild(input)

        task_container.appendChild(h3)
        task_container.appendChild(div_bnt)


        input.addEventListener("keypress", (event) => {

          if (event.which === KEY_ENTER) {
            counter++
            const sol = parseInt(input.value,10)

            if (sol === task.solution) {
              input.parentElement.parentElement.style.display = "none"

            } else {

                if (counter <= 2 ) {alert("Try again")
              }else {
                input.style.display = "none"
                let task_option = [task.solution, task.solution + 1, task.solution - 1]
                let btn_options = shuffle(task_option)

                const btn_option1 = document.createElement("button")
                btn_option1.classList.add("medium_btn")
                btn_option1.textContent = btn_options[0]

                const btn_option2 = document.createElement("button")
                btn_option2.classList.add("medium_btn")
                btn_option2.textContent = btn_options[1]

                const btn_option3 = document.createElement("button")
                btn_option3.classList.add("medium_btn")
                btn_option3.textContent = btn_options[2]

                input.parentElement.appendChild(btn_option1)
                input.parentElement.appendChild(btn_option2)
                input.parentElement.appendChild(btn_option3)

                btn_option1.addEventListener("click", () => {
                  if (parseInt(btn_option1.textContent) === task.solution) {
                    btn_option1.parentElement.parentElement.style.display = "none"
                  }else {alert ("Trai again")}
                })

                btn_option2.addEventListener("click", () => {
                  if (parseInt(btn_option2.textContent) === task.solution) {
                    btn_option2.parentElement.parentElement.style.display = "none"
                  }else {alert ("Trai again")}
                })

                btn_option3.addEventListener("click", () => {
                  if (parseInt(btn_option3.textContent) === task.solution) {
                    btn_option3.parentElement.parentElement.style.display = "none"
                  }else {alert ("Trai again")}
                })

              }

        }
      }

    })


        col_3.appendChild(task_container)

        row.appendChild(col_3)

        task_index++;
      }

    container.appendChild(row)
    img = images[Math.floor(Math.random() * images.length)]
    container.classList = ""
    container.classList.add(img)
  }


    footer.style.visibility = "visible"
  }

  function getDifficulty(age) {

    if (age <= 8) {
      return easy
    } else if (age <= 12) {
      return medium
    } else if (age >= 13) {
      return hard
    }

  }


  function getDifficultyTasks(difficulty) {

    if (age <= 8) {
      return difficulty = "easy"
    } else if (age <= 12) {
      return difficulty = "medium"
    } else if (age >= 13) {
      return difficulty = "hard"
    }

  }

  function drawTaskBoard() {

     while(container.firstChild) {
      container.removeChild(container.firstChild)
    }

    task_greeting.style.visibility = "visible"
    nav_tasks.parentElement.children[3].style.display = "none"

    event.preventDefault()

  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  function calculation(tasks) {

    let task_index = 0
    let term = 0

    for (let x = 0; x < tasks.length ; x++) {

      let task = tasks[task_index]
      const problem = task.problem

      const number1 = parseInt(problem.split(" ")[0],10)
      const number2 = parseInt(problem.split(" ")[2],10)
      const operator = problem.split(" ")[1]


      if (operator === "+") {
        term = number1 + number2
      } else if (operator === "-") {
          term = number1 - number2
        } else if (operator === "*") {
            term = number1 * number2
          } else if (operator === "/") {
             term = number1 / number2
            }

      task.solution = term
      task_index++
    }

  }

})
