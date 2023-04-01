import React from "react";
import "./BeliefsList.css";
import BeliefsListItem from "../BeliefsListItem/BeliefsListItem";

const BeliefsList = function (props) {
  return (
    <div className="BeliefsList">
      <div className="">
        <h2 className="h2--thin">Statement of Faith</h2>
        <BeliefsListItem>
          that the Bible is <span className="no-wrap">God's word</span> to all
          peoples of the world. It is inspired of God, infallible, and
          authoritative.
        </BeliefsListItem>
        <BeliefsListItem>
          that there is one true God, existing eternally in three persons:{" "}
          <span className="no-wrap">the Father,</span>{" "}
          <span className="no-wrap">the Son</span> and{" "}
          <span className="no-wrap">the Holy Spirit.</span>
        </BeliefsListItem>
        <BeliefsListItem>
          God the Father is eternal, omniscient, omnipresent and omnipotent. God
          is absolutely holy, righteous, and just. His love and mercy was
          manifested in the atoning death of His only begotten Son on Calvary.
        </BeliefsListItem>
        <BeliefsListItem>
          in the deity of Lord Jesus Christ, the eternal Son of God. He was born
          of a virgin, lived a sinless life, gave His life for ransom for
          sinners in His death upon the cross, and is exalted to the right hand
          of God the father.
        </BeliefsListItem>
        <BeliefsListItem>
          in the deity of the Holy Spirit. The Holy Spirit convicts the world of
          sin and is the Divine Teacher who guides believers into all truth.
        </BeliefsListItem>
        <BeliefsListItem>
          that God created humanity in His own image and that at creation
          humankind was good. However, humanity willfully entered into sin and
          was separated <span className="no-wrap">from God.</span>
        </BeliefsListItem>
        <BeliefsListItem>
          that humanity's only hope to be restored to right relationship with
          God is through the redemptive work of Christ. Every person can be
          forgiven of their sins and enter into fellowship with God through
          repentance and faith in <span className="no-wrap">Christ Jesus.</span>
        </BeliefsListItem>
        <BeliefsListItem>
          that there are two ordinances as given by scripture. The first is
          water baptism by immersion after repenting of one's sins and receiving
          Christ as Lord and Savior. The second is communion as a symbolic
          remembrance of Christ's suffering and atoning work upon the cross.
        </BeliefsListItem>
        <BeliefsListItem>
          in the baptism of the Holy Spirit as an experience following salvation
          that empowers believers for the proclamation of the gospel just as it
          did in the scriptures.
        </BeliefsListItem>
        <BeliefsListItem>
          that sanctification occurs initially at salvation and is a life-long
          process by which believers are conformed to the image of Christ and
          drawn deeper into relationship with Him.
        </BeliefsListItem>
        <BeliefsListItem>
          in the resurrection of believers who have died and their rapture
          together with those who remain until the coming of the Lord. This is
          the imminent and blessed hope of the church.
        </BeliefsListItem>
      </div>
    </div>
  );
};

export default BeliefsList;
