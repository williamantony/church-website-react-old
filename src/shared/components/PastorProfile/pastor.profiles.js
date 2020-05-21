import React from "react";
import pastorJosephPhoto from "../../images/photos/pastor-joseph_k_joseph.png";
import pastorJoshuaPhoto from "../../images/photos/pastor-joshua_k_joseph.jpg";

const pastorJoseph = {
  id: "joseph",
  name: "Pr. Joseph K. Joseph",
  role: "Founder & Senior Pastor",
  photo: pastorJosephPhoto,
  summary: (
    <React.Fragment>
      <p className="p--indent">
        Pastor Joseph K. Joseph is the founder and Senior Pastor of the
        International Pentecostal Assembly. He has served as the Senior Pastor
        since 1972. His love for the Lord and for those around him is evident in
        all that he does. His greatest joy is serving the Lord and the Lord's
        people.
      </p>
      <br />
      <p className="p--indent">
        In 1969, the late Pastor K. E. Abraham, founder of the Indian
        Pentecostal Church of God, prayed over and sent Pastor Joseph to Chicago
        for theological studies. Pastor Joseph graduated with his theological
        degree from Chicago Bible School in 1972. He went on to do postgraduate
        studies at North Park Theological Seminary.
      </p>
      <br />
      <p className="p--indent">
        Pastor Joseph has a heart to see God's people grow in love for the Lord,
        each other and the world around them. He and his wife, Mercy, have
        faithfully served the church and have been actively involved in all
        aspects of ministry.
      </p>
    </React.Fragment>
  ),
};

const pastorJoshua = {
  id: "joshua",
  name: "Pr. Joshua Joseph",
  role: "Associate Pastor",
  photo: pastorJoshuaPhoto,
  summary: (
    <React.Fragment>
      <p className="p--indent">
        Pastor Joshua K. Joseph came on staff as a full-time pastor in 2015. He
        graduated with his baccalaureate from Christian Life College in 2011 and
        is currently pursuing his Master of Divinity degree at Trinity
        Evangelical Divinity School. His passion for the word of God is evident
        as he preaches and teaches from the scriptures. Pastor Josh firmly
        believes in the power and potential of the local church to transform
        lives through the faithful proclamation of the word of God.
      </p>
    </React.Fragment>
  ),
};

export default {
  pastorJoseph,
  pastorJoshua,
};
