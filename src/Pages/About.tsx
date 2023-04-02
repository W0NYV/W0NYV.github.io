import React from 'react';
import OneWord from './OneWord';

function About() {

  return (
    <div className="About">
      
      <div className="mt-10 flex justify-center space-x-20">
        <img src=".\w0nyv.jpg" alt="W0NYV-icon" />      

        <div className="mt-20 flex flex-col space-y-10">
          <div>
            <p className="text-2xl">W0NYV（読み：をにゅ）</p>
            <p>興味：リアルタイムCG, VJ, XR LIVE</p>
            <OneWord />
          </div>

          <div className="block flex space-x-4">

            <a href="https://twitter.com/W0NYV" target="_blank">
              <img width={48} src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg" alt="twitter" />
            </a>

            <a href="https://github.com/W0NYV" target="_blank">
              <img width={48} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github" />
            </a>
            
            <a href="https://w0nyv.hatenablog.com" target="_blank">
              <img width={48} height={48} src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Hatena_blog_logo.svg" alt="blog" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
