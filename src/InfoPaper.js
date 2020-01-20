import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      textAlign: 'left',
      '& p': {
        marginTop: 0,
        marginBottom: 0,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
      },
      '& h2': {
        marginTop: 0,
        marginBottom: 0,
        padding: 12,
      },
      '& ul': {
        marginTop: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 12,
      },
    }
  }));
  

export default function InfoPaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} >
      <h2>Process</h2>
        <p>
           A while back the StyleGAN project came out and with it a number of neat spin offs, which would generate people/cars/etc. that didn't exist.
           After reading a bit about it, it sounded like it wasn't too hard to adapt to other use cases, as long as you had enough source images to train
           the system on. At this point I had been doing my photo a day thing for a few years, so I decided that I should have enough photos in that 
           collection to train a model that could generate new fake photos of me.
        </p>
        <br/>
        <p>
           Using what I had available to me at that time, I made an initial attempt at doing this, but was incapable of actually doing it due to
           my lack of a graphics card and unwillingness to spend much money on aws. I did manage to clean up my data set, getting it ready to train. 
           I was unable to actually run the training though. This project then went on hold, with about 1.5k images of me ready to be trained on but no way
           to do that training.
        </p>
        <br/>
        <p>
           However, shortly before this site went up a friend sent me a link to a blog about another person's similar project. This blogpost revealed
           the existence of another app (runwayML) I could pay a small fee for to train my model (with some transfer learning from the FFHQ set, which is 
           actually what I had wanted all along), so I did that. It cost 10 dollars to become a member, which I needed to gain access to the training feature
           which was in beta. It trained my model on top of the FFHQ dataset and then produced a pickle file I was able to download.
        </p>
        <br/>
        <p>
           Once that was done I used google colab to take the StyleGAN sample generating code and adapt it to make the images I needed and upload them to
           an s3 bucket. Then I learned a tiny bit of react and flask so I could spin up the very very simple front and back ends for this app. That's 
           what you see here.
        </p>

        <h2>Thanks/Links/Credits</h2>
        <ul>
            <li><a href="https://github.com/NVlabs/stylegan">StyleGan</a> - The baseline of all of this</li>
            <li><a href="https://www.gwern.net/TWDNE">TWDNE</a> - This write up helped me a lot at the beginning</li>
            <li><a href="https://youtu.be/6B26asyGKDo">everyday</a> - Inspired me to also try the photo a day thing</li>
            <li><a href="http://www.chasestevens.com/">Chase</a> - For sending me the link to the beetle blog</li>
            <li><a href="https://www.cunicode.com/works/confusing-coleopterists/#StyleGAN">This Beetle Blog</a> - For telling me about google colab and runway ml</li>
            <li><a href="https://runwayml.com/">runwayML</a> - Which I used to train the model</li>
            <li><a href="https://colab.research.google.com/notebooks/welcome.ipynb">Google Colab</a> - Which I used to generate all my sample images</li>
        </ul>
      </Paper>
    </div>
  );
}