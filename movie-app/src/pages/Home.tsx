import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CharacterModel, characterService } from "../services/characterService";
import { ACTION_TYPES, appContext } from "../states";

// const characters = [
//   {
//     Species: "Human",
//     Age: "45-51",
//     Planet: "Earth",
//     Profession: "Mayor of New New York City",
//     Status: "Alive",
//     FirstAppearance: "A Big Piece of Garbage",
//     PicUrl:
//       "https://vignette.wikia.nocookie.net/en.futurama/images/7/77/Mayor_C._Randall_Poopenmeyer.jpg/revision/latest/scale-to-width-down/350?cb=20090430120112",
//     Relatives: "no relatives available",
//     VoicedBy: "David Herman",
//     Name: "C. Randall Poopenmeyer",
//   },
//   {
//     Species: "Human",
//     Age: "Unknown",
//     Planet: "Earth",
//     Profession: "Formerly: Crew member of Planet Express",
//     Status: "Alive",
//     FirstAppearance: "Möbius Dick",
//     PicUrl:
//       "https://vignette.wikia.nocookie.net/en.futurama/images/1/1c/Candy.png/revision/latest/scale-to-width-down/350?cb=20111023083201",
//     Relatives: "no relatives available",
//     VoicedBy: "Tress MacNeille",
//     Name: "Candy",
//   },
//   {
//     Species: "Human",
//     Age: "41-47",
//     Planet: "Earth",
//     Profession:
//       "Currently: Bureaucrat and AccountantFormerly: Limbo champion, Robot Inspector",
//     Status: "Unknown",
//     FirstAppearance: '"The Series Has Landed"',
//     PicUrl:
//       "https://vignette.wikia.nocookie.net/en.futurama/images/0/0d/Hermes.png/revision/latest?cb=20170719011119",
//     Relatives: "Mrs. Conrad,Mr. Conrad,LaBarbara Conrad,Dwight Conrad",
//     VoicedBy: "Phil LaMarr",
//     Name: "Hermes Conrad",
//   },
//   {
//     Species: "Human",
//     Age: "Unknown",
//     Planet: "Earth",
//     Profession: "Unemployed",
//     Status: "Alive",
//     FirstAppearance: "The 30% Iron Chef",
//     PicUrl:
//       "https://vignette.wikia.nocookie.net/en.futurama/images/e/e2/Hobos.jpg/revision/latest/scale-to-width-down/350?cb=20111118085946",
//     Relatives: "no relatives available",
//     VoicedBy: "Maurice LaMarche",
//     Name: "Dandy Jim",
//   },
//   {
//     Species: "Human",
//     Age: "Unknown",
//     Planet: "Earth",
//     Profession: "Unknown",
//     Status: "Unknown",
//     FirstAppearance: "The Day the Earth Stood Stupid",
//     PicUrl:
//       "https://vignette.wikia.nocookie.net/en.futurama/images/0/07/Big_brain.png/revision/latest/scale-to-width-down/350?cb=20061012223057",
//     Relatives: "no relatives available",
//     VoicedBy: "Lauren Tom",
//     Name: "Elizabeth Bennet",
//   },
//   {
//     Species: "Human",
//     Age: "Unknown",
//     Planet: "Earth",
//     Profession: "Orphan",
//     Status: "Unknown",
//     FirstAppearance: "The Cyber House Rules",
//     PicUrl:
//       "https://vignette.wikia.nocookie.net/en.futurama/images/7/74/Albert.jpg/revision/latest/scale-to-width-down/350?cb=20090723101946",
//     Relatives: "Bender Bending Rodríguez,Abner Doubledeal,Sally,Nina",
//     VoicedBy: "Kath Soucie",
//     Name: "Albert",
//   },
//   {
//     Species: "Human",
//     Age: "30",
//     Planet: "Earth",
//     Profession:
//       "Print shop worker, British Agent and Counterfeiter, Traitor Alternative Timeline: Duke",
//     Status: "Deceased",
//     FirstAppearance: "All the Presidents' Heads",
//     PicUrl:
//       "https://vignette.wikia.nocookie.net/en.futurama/images/1/14/DavidFarnsworth.png/revision/latest/scale-to-width-down/350?cb=20111014110816",
//     Relatives:
//       "Ned Farnsworth,Velma Farnsworth,Floyd Farnsworth,Hubert J. Farnsworth,Cubert J. Farnsworth,Igner",
//     VoicedBy: "David Herman",
//     Name: "David Farnsworth",
//   },
//   {
//     Species: "Human",
//     Age: "Unknown",
//     Planet: "Earth",
//     Profession: "Unemployed",
//     Status: "Alive",
//     FirstAppearance: '"The 30% Iron Chef"',
//     PicUrl:
//       "https://vignette.wikia.nocookie.net/en.futurama/images/e/e2/Hobos.jpg/revision/latest/scale-to-width-down/350?cb=20111118085946",
//     Relatives: "no relatives available",
//     VoicedBy: "Billy West",
//     Name: "Gus",
//   },
//   {
//     Species: "Human",
//     Age: "late 30s/mid to late 40s",
//     Planet: "Earth",
//     Profession:
//       "Owner: Ultimate Robot Fighting League, New New York Mets, and the Tickleodeon TV network",
//     Status: "Unknown",
//     FirstAppearance: '"Raging Bender"',
//     PicUrl:
//       "https://vignette.wikia.nocookie.net/en.futurama/images/7/74/Abner_Doubledeal.jpg/revision/latest/scale-to-width-down/350?cb=20090723100227",
//     Relatives: "Sally,Albert",
//     VoicedBy: "Tom Kenny",
//     Name: "Abner Doubledeal",
//   },
//   {
//     Species: "Formerly: HumanCurrently: Head in Jar (possibly)",
//     Age: "Unknown",
//     Planet: "Earth",
//     Profession: "Formerly: President of the United StatesPizza boy",
//     Status: "Unknown",
//     FirstAppearance: "Ghost in the Machines",
//     PicUrl:
//       "https://vignette.wikia.nocookie.net/en.futurama/images/8/86/BarackObama.png/revision/latest/scale-to-width-down/350?cb=20111031062218",
//     Relatives: "no relatives available",
//     VoicedBy: "Phil LaMarr",
//     Name: "Barack Obama",
//   },
//   {
//     Species: "Human",
//     Age: "Unknown",
//     Planet: "Earth",
//     Profession: "(former) Chief of PolicePeace officer",
//     Status: "Alive (lives in Universe Gamma)",
//     FirstAppearance: "Unknown",
//     PicUrl:
//       "https://vignette.wikia.nocookie.net/en.futurama/images/c/c3/ColleenO%27Hallahan.png/revision/latest/scale-to-width-down/350?cb=20111007120515",
//     Relatives: "Yivo,Philip J. Fry I,Chu,Ndulu,Schlomo",
//     VoicedBy: "Brittany Murphy",
//     Name: "Colleen O'Hallahan",
//   },
//   {
//     Species: "Human/Clone",
//     Age: "13",
//     Planet: "Earth",
//     Profession: "Co-owner of Awesome Express",
//     Status: "Alive",
//     FirstAppearance: '"A Clone of My Own"',
//     PicUrl:
//       "https://vignette.wikia.nocookie.net/en.futurama/images/7/7e/CubertFarnsworth.png/revision/latest?cb=20130330070342",
//     Relatives:
//       "Hubert J. Farnsworth,Igner,Floyd Farnsworth,Ned Farnsworth,Velma Farnsworth,Grandma Farnsworth,Philip J. Fry I,John A. Zoidberg",
//     VoicedBy: "Kath Soucie",
//     Name: "Cubert J. Farnsworth",
//   },
//   {
//     Species: "Human",
//     Age: "Unknown",
//     Planet: "Earth",
//     Profession: "Slave",
//     Status: "Unknown",
//     FirstAppearance: '"How Hermes Requisitioned His Groove Back"',
//     PicUrl:
//       "https://vignette.wikia.nocookie.net/en.futurama/images/8/82/Australian_Man.jpg/revision/latest/scale-to-width-down/350?cb=20090608182449",
//     Relatives: "no relatives available",
//     VoicedBy: "John DiMaggio",
//     Name: "Australian man",
//   },
//   {
//     Species: "Human",
//     Age: "60s (unconfirmed)",
//     Planet: "Earth",
//     Profession: "Unknown",
//     Status: "Unknown",
//     FirstAppearance: "The Beast with a Billion Backs",
//     PicUrl:
//       "https://vignette.wikia.nocookie.net/en.futurama/images/4/4e/Mentioned.png/revision/latest/scale-to-width-down/350?cb=20150317144419",
//     Relatives: "Mrs. Conrad,Hermes Conrad,LaBarbara Conrad,Dwight Conrad",
//     VoicedBy: "Unknown",
//     Name: "Mr. Conrad",
//   },
//   {
//     Species: "Human",
//     Age: "Unknown",
//     Planet: "Earth",
//     Profession: "Possibly a housewife",
//     Status: "Deceased",
//     FirstAppearance: "The Luck of the Fryish",
//     PicUrl:
//       "https://vignette.wikia.nocookie.net/en.futurama/images/8/86/Mrs._Fry.png/revision/latest/scale-to-width-down/350?cb=20110617095316",
//     Relatives:
//       "Yancy Fry, Sr.,Enos Fry,Mildred Fry,Yancy Fry,Philip J. Fry,Turanga Leela,Philip J. Fry II,Kif Kroker's offspring,Mrs. Fry",
//     VoicedBy: "Tress MacNeille",
//     Name: "Mrs. Fry",
//   },
//   {
//     Species: "Human",
//     Age: "Unknown",
//     Planet: "Earth",
//     Profession: "Chief financial officer and co-manager for Romanticorp",
//     Status: "Alive",
//     FirstAppearance: '"Love and Rocket"',
//     PicUrl:
//       "https://vignette.wikia.nocookie.net/en.futurama/images/e/e7/SheldonandGwen.png/revision/latest/scale-to-width-down/350?cb=20110615144635",
//     Relatives: "Sheldon",
//     VoicedBy: "Tress MacNeille",
//     Name: "Gwen",
//   },
//   {
//     Species: "Unknown",
//     Age: "Unknown",
//     Planet: "Unknown",
//     Profession: "Unknown",
//     Status: "Unknown",
//     FirstAppearance: "Unknown",
//     PicUrl:
//       "https://res.cloudinary.com/teepublic/image/private/s--RisVF5Vs--/t_Preview/b_rgb:fffefe,c_limit,f_jpg,h_630,q_90,w_630/v1475865828/production/designs/720040_1.jpg",
//     Relatives: "no relatives available",
//     VoicedBy: "Unknown",
//     Name: "John",
//   },
//   {
//     Species: "Human",
//     Age: "45",
//     Planet: "Earth",
//     Profession: "Aide to the Mayor of New New York",
//     Status: "Alive",
//     FirstAppearance: "The Why of Fry",
//     PicUrl:
//       "https://vignette.wikia.nocookie.net/en.futurama/images/4/4d/Chaz.png/revision/latest?cb=20090403214045",
//     Relatives: "Turanga Leela",
//     VoicedBy: "Bob Odenkirk",
//     Name: "Chaz",
//   },
//   {
//     Species: "Human",
//     Age: "Unknown",
//     Planet: "Earth",
//     Profession: "Unknown",
//     Status: "Alive",
//     FirstAppearance: "I Second That Emotion",
//     PicUrl:
//       "https://vignette.wikia.nocookie.net/en.futurama/images/e/eb/Armando.jpg/revision/latest/scale-to-width-down/350?cb=20111025055519",
//     Relatives: "no relatives available",
//     VoicedBy: "Billy West",
//     Name: "Armando",
//   },
//   {
//     Species: "Human",
//     Age: "Unknown",
//     Planet: "Earth",
//     Profession:
//       "Mother of Michelle Jenkins and Ex-Mother-in-law of Charles Constantine",
//     Status: "Deceased",
//     FirstAppearance: "The Cryonic Woman",
//     PicUrl:
//       "https://vignette.wikia.nocookie.net/en.futurama/images/4/4e/Mentioned.png/revision/latest/scale-to-width-down/350?cb=20150317144419",
//     Relatives: "Michelle Jenkins,Charles Constantine",
//     VoicedBy: "N/A",
//     Name: "Beth Jenkins",
//   },
// ];

function Home() {
  const [state, dispatch]: any = useContext(appContext);

  useEffect(() => {
    characterService.getAll().then((result) => {
      dispatch({
        type: ACTION_TYPES.GET_ALL_CHARACTER,
        payload: result,
      });
    });
  }, []);

  const characters: Array<CharacterModel> = state.characters;

  return (
    <div>
      <div>
        <div>
          <div className="mt-16 grid grid-cols-3 gap-4">
            {characters.map((c) => {
              return (
                <div>
                  <div>
                    <Link to={"/" + c.Name}>
                      <img
                        className="h-64 object-cover"
                        src={c.PicUrl}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="my-2">
                    <p className="text-xl font-bold">{c.Name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
