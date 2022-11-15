import { element } from "prop-types";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

import "../styles/post.css";

moment.locale("fr", {
  months:
    "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
      "_"
    ),
  monthsShort:
    "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
  monthsParseExact: true,
  weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
  weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
  weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm",
  },
  calendar: {
    sameDay: "[Aujourd’hui à] LT",
    nextDay: "[Demain à] LT",
    nextWeek: "dddd [à] LT",
    lastDay: "[Hier à] LT",
    lastWeek: "dddd [dernier à] LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "dans %s",
    past: "il y a %s",
    s: "quelques secondes",
    m: "une minute",
    mm: "%d minutes",
    h: "une heure",
    hh: "%d heures",
    d: "un jour",
    dd: "%d jours",
    M: "un mois",
    MM: "%d mois",
    y: "un an",
    yy: "%d ans",
  },
  dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
  ordinal: function (number) {
    return number + (number === 1 ? "er" : "e");
  },
  meridiemParse: /PD|MD/,
  isPM: function (input) {
    return input.charAt(0) === "M";
  },
  // In case the meridiem units are not separated around 12, then implement
  // this function (look at locale/id.js for an example).
  // meridiemHour : function (hour, meridiem) {
  //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
  // },
  meridiem: function (hours, minutes, isLower) {
    return hours < 12 ? "PD" : "MD";
  },
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4, // Used to determine first week of the year.
  },
});
function Post() {
  const [post, setPost] = useState([]);
  const [like, setLike] = useState(0);

  function Like(event) {
    let parameters = `likes=1&_id=${event.target.id}&`;
    let idSelected = event.target.id;

    fetch("http://localhost:3001/main", {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
      body: parameters,
    }).then(function (response) {});
    for (let i = 0; i < post.length; i++) {
      if (post[i]._id === idSelected) {
        setLike(post[i].likes + 1);
      }
    }
  }
  useEffect(() => {
    fetch("http://localhost:3001/main", {
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
    }).then((response) =>
      response.json().then((data) => {
        setPost(data);
      })
    );
  });

  return post.map((element, index) => (
    <div className="article-global">
      <div className="lien-image">
        <div className="image-global">
          <img src={element.image} alt="article" className="image-solo" />
        </div>
        <h2 className="article-titre">{element.titre}</h2>

        <p className="article-texte">{element.description}</p>
        <div className="article-date">
          <div className="date">{moment(element.date).format("LL")}</div>
        </div>
        <div>
          <div className="likes">
            <i
              className="fa-regular fa-thumbs-up fa-2x"
              id={element._id}
              onClick={Like}
            ></i>
            <div className="number-likes">{element.likes}</div>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default Post;
