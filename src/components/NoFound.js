/* 
      *                                                            *
    *****                                                        *****                             
      *                                                            *
        ==========================================================
        ==========                                      ==========
        ==========        Page for Not-Found            ==========
        ==========                                      ==========
        ==========================================================
      *                                                            *
    *****                                                        *****   
      *                                                            *
*/

import React, { Component } from 'react';
const HEIGHT = window.innerHeight;

export default () => {
    return (
      <div className="banner-block" style={{ height: HEIGHT - 84 }}>
        <div className="container" />
        <div className="container text-center">
          <img src="/images/404.png" alt="404 error" />
          <div className="row">
            <div className="col-md-12">
              <div className="main-icon text-warning">
                <span className="uxicon uxicon-alert" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-md-push-3 offset-3">
              <p className="lead">
                If you think what you're looking for should be here, please contact the site owner.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

