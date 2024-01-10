import React from 'react'
import './style.css'
import Heritages from '../../components/heritages'
import { Container, Row, Col } from "react-bootstrap";

import { LocationMarker } from '../../components/maps/location_marker'

const DetailPage = () => {
  return (
    <>
      <div className='site__page page'>
        <section class="heritage-container container article-story-group mt-5" data-stories="8">
          <div class="article-story-group__items mt-5">
            <div class="article-story-group__item">
              <article data-article-id="97758" about="/news/elneny-warms-afcon-win"
                class="node node--type-article node--view-mode-full">
                <div class="article-card-header card rounded shadow" >

                  <div class="card__content">
                    <div class="article-card-header__wrapper">
                      <div class="article-card-header__content">
                        <span class="h6 article-card-header__subhead">News</span>
                        <h1 class="article-card-header__title" title="Rato Machhindranath Temple"><span
                          class="article-card-header__title-words"> Rato Machhindranath Temple
                        </span>
                        </h1>
                        <div class="article-card-header__metadata">
                          <span class="article-card-header__author"><a href="#"> - Ragen maharjan</a></span>
                          <span class="article-card-header__date">08 Jan 2024</span>
                          {/* <button class="button button--primary" data-js-social-sharing="true"
                        data-js-social-sharing-title="Elneny warms up for AFCON with win"
                        data-js-social-sharing-url="/news/elneny-warms-afcon-win"
                        data-js-campaign="news">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
                          <g>
                            <path
                              d="M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63 M14,3v6 C6.22,10.13,3.11,15.33,2,21c2.78-3.97,6.44-6,12-6v6l8-9L14,3L14,3z"
                              fill="currentColor" />
                          </g>
                        </svg>
                        Share
                      </button> */}

                          <div className='pull-right'>
                            <span class="article-card-header__author"><i className='fa fa-map-marker'></i>&nbsp;Bungamati, Lalitpur</span>
                            <span class="article-card-header__date"><span>123 views</span></span>
                          </div>
                        </div>
                      </div>
                      <div class="article-card-header__media">
                        <picture>
                          {/* <source
                        srcset="https://images.pexels.com/photos/5952518/pexels-photo-5952518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        media="all and (max-width: 440px)" type="image/png" width="450" height="253" /> */}
                          {/* <source
                        srcset="/sites/default/files/styles/tablet_16x9/public/images/elneny-egypt-warm-up.png?auto=webp&amp;itok=xpswe71c 1x"
                        media="all and (min-width: 441px) and (max-width: 800px)" type="image/png"
                        width="800" height="450" />
                      <source
                        srcset="/sites/default/files/styles/large_16x9/public/images/elneny-egypt-warm-up.png?auto=webp&amp;itok=oA6wYZ9S 1x"
                        media="all and (min-width: 801px) and (max-width: 1300px)" type="image/png"
                        width="1045" height="588" />
                      <source
                        srcset="/sites/default/files/styles/large_16x9/public/images/elneny-egypt-warm-up.png?auto=webp&amp;itok=oA6wYZ9S 1x"
                        media="all and (min-width: 1301px)" type="image/png" width="1045"
                        height="588" /><img loading="lazy" height="632" width="1123"
                          src="/sites/default/files/styles/large_16x9/public/images/elneny-egypt-warm-up.png?auto=webp&amp;itok=oA6wYZ9S"
                          alt="Mohamed Elneny warming up for Egypt" typeof="foaf:Image" /> */}
                        </picture>
                        <img src='https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width={1240} className=' img-fluid'></img>
                      </div>
                    </div>

                  </div>


                  <div class="node__content ">

                    <div class="article-body">
                      <p>Bungamati, located in the southern part of Lalitpur district within the Kathmamdu Valley, falls under Ward No. 22 of Lalitpur Metropolitan City. This area was formerly located within Karyabinayak Municipality area. It is historically as well as religiously significant touristdestination. Bungamati is also considered as the religious and cultural epicenter of all the villages and cities within the valley.</p>
                      <p>It is the place where devotees come together to conclude their annual religious and cultural events, occurring once a year and every twelve years. This is because it is the home to revered deity Lord Machhindranath whose Jatra is known by the world as the “Tallest and Longest festival of the world”.</p>
                      <p>The main temple of Lord Aryavalokiteshwor Karunamaya Machhindranath is at the center of Bungamati. The wide roundabout (chowk) where the temple of Machhindranath is located, is known as Machhindra Bahal. The main entrance of Machhindra Bahal is on the northern side of the temple and the second entrance is on the southern side. Inside Machhindra Bahal, there are temples of Shree Hyagriv Bhairavnath, Manakamana Mai, and Srishtikanta Lokeshwor as well.</p>
                      <p>However, due to the theft of Lokeshwar’s idol from the temple, a statue of Shakyamuni Buddha has been installed in its place. In the Machhindra Bahal premises, you can also find many Buddhist stupas and chibahals. Likewise, inside this Bahal one can also find statues and representations of Mahankal, Gorakhnath, Hanuman, Nrityeshwar, Chwaskamana Mai, and Ganesh.</p>
                      <p>Elenny almost grabbed a late goal himself when he headed a corner wide of the mark with six
                        minutes remaining, but enough had been done to send his side into the tournament on a high.
                      </p>
                      <p>There is also a Vihar established under the reign of King Narendra Dev within the Machhindranath Bahal complex which is also called Narendradev Sanskarit Amarawati Mahavihar.</p>
                      <p>The famous deity Lord Rato Machhindranath, also known as Avalokiteshwor, Aryavalokiteshwor, Karunamaya, Bungadyo, Bungamalokeshwor, Padyamapani lokeshwor, and Virinchi Narayan, arrived in the Kathmandu Valley of Nepal Mandal in the year 3600 of the Kaligat Sambat calendar, which corresponds to 556 B.S. (613 A.D.). He was brought to Nepal Mandal to end a severe drought which lasted for 12 years in this region.</p>
                      <p>The story of Machhindranath is connected to the reign of Gunakamadev. King Gunakamadev’s daughter Gunalaxmi married a jackal because of the promise made by the king when Gunalaxmi was a child. After Gunalaxmi was married to Jackal, the courtiers of Gunakamadev went to see the bridegroom’s house, and as they reached their destination in the jungle, they discovered a large palace. </p>
                    </div>

                    <div><p class="references">References</p><p>Paneju Sangh, Bungamati</p></div>






                  </div>
                </div>

                <div class="article-card-header card rounded shadow" >

                  <div class="card__content">
                    <div class="article-card-header__wrapper node__content article-body">
                      <div class="article-card-header__content">
                       
                        <h1 class="article-card-header__title" title=""><span
                          class="article-card-header__title-words"> Place Location
                        </span>
                        </h1>
                        <div class="article-card-header__metadata">

                   
                          <div className=''>
                            <span class="article-card-header__author"><i className='fa fa-map-marker'></i>&nbsp;Bungamati, Lalitpur</span>
                            <span class="article-card-header__date"><span>123 views</span></span>
                          </div>
                        </div>
                      </div>
                      <div class="article-card-header__media">


                        <LocationMarker />
                        
                      </div>
                    </div>

                  </div>



                </div>

              </article>

            </div>
            <Col className="mb-5 d-block mt-5 pt-md-3">
              <Col lg="12">
                <h1 className="teams_title mb-2">Discover More</h1>
              </Col>
              <Col lg="2">
                <hr className="t_border my-3 ml-0 text-left" />{" "}
              </Col>
            </Col>
                        <Heritages />
          </div>
         
        </section>
      </div>
    </>
  )
}

export default DetailPage