// Import React
import React from 'react'
// import CodeSlide from 'spectacle-code-slide'

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Spectacle,
  Text
} from 'spectacle'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from '../lb'

// Import custom component
// import Interactive from '../assets/interactive'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const images = {
  css: require('../assets/css.gif'),
  igotthis: require('../assets/igotthis.gif'),
  goals: require('../assets/girrafe-goals.jpg'),
  thanks: require('../assets/thanks.gif'),
  word: require('../assets/word.jpg'),
  thisisfine: require('../assets/thisisfine.gif'),
  why: require('../assets/why.gif'),
  deadlines: require('../assets/spongebob.gif'),
  gtfo: require('../assets/gtfo.gif'),
  w3c: require('../assets/w3c.png'),
  doubleTake: require('../assets/double-take.gif'),
  iKnowThis: require('../assets/iknowthis.gif'),
  youKeep: require('../assets/youkeepusingthatword.gif'),
  nohi5: require('../assets/nohi5.gif'),
  alot: require('../assets/alot.gif'),
  money: require('../assets/money.gif'),
  what: require('../assets/seinfeld-newman.gif'),
  confucius: require('../assets/confucius.gif'),
  wookie: require('../assets/wookie.gif'),
  itcrowd: require('../assets/itcrowdsun.gif'),
  slamdoor: require('../assets/slamdoor.gif'),
  thepower: require('../assets/jimcarey.gif')
}

preloader(images)

const theme = createTheme()

export default class Presentation extends React.Component {
  render () {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['fade']} transitionDuration={200}>
          <Slide bgColor='dark'>
            <Heading size={2} fit lineHeight={1} textColor='primary'>
              Minimising CSS
            </Heading>
            <Heading size={2} fit lineHeight={1} textColor='primary'>
              Complexity
            </Heading>
            <Heading size={5} margin='4.5rem 0 0' textColor='tertiary'>
              @lukebrooker
            </Heading>
          </Slide>
          <Slide bgColor='dark'>
            <Image src={images.css.replace('/', '')} width='60%' />
          </Slide>
          <Slide bgColor='dark'>
            <BlockQuote>
              <Quote>There is no absolute definition of what complexity means; the only consensus among researchers is that there is no agreement about the specific definition of complexity.</Quote>
              <Cite>Wikipedia</Cite>
            </BlockQuote>
          </Slide>
          <Slide bgImage={images.thanks.replace('/', '')}>
            <Heading size={3} textColor='primary'>Thanks</Heading>
          </Slide>
          <Slide transition={['fade']} notes=''>
            <Heading size={2} fit>How did we/I get here?</Heading>
          </Slide>
          <Slide notes='' bgImage={images.goals.replace('/', '')}>
            <Heading size={3} textColor='primary' lineHeight={1.3}>#goals</Heading>
          </Slide>
          <Slide notes=''>
            <Heading size={3} textColor='secondary' lineHeight={1.3}>
              Write semantic html, use CSS to style it?
            </Heading>
          </Slide>
          <Slide notes=''>
            <Heading size={3} textColor='secondary' lineHeight={1.3}>
              <Image src={images.word.replace('/', '')} />
            </Heading>
          </Slide>
          <Slide notes=''>
            <Heading size={3} textColor='secondary' lineHeight={1.3}>
              But applications?
            </Heading>
          </Slide>
          <Slide notes=''>
            <Heading size={3} textColor='secondary' lineHeight={1.3}>
              Write reusable *CSS* “components”?
            </Heading>
          </Slide>
          <Slide notes='' bgColor='black'>
            <Image src={images.igotthis.replace('/', '')} width='80%' />
          </Slide>
          <Slide notes=''>
            <CodePane lang='css' margin='0 0 .75rem' source='.button {}' />
            <CodePane lang='css' margin='0 0 .75rem' source='.button--primary {}' />
          </Slide>
          <Slide notes='' bgImage={images.thisisfine.replace('/', '')} bgDarken={0.5}>
            <Heading size={3} textColor='primary' lineHeight={1.3}>
              Reality
            </Heading>
          </Slide>
          <Slide>
            <Heading size={3} margin='0 0 .75rem'>Things change</Heading>
            <CodePane lang='css' margin='0 0 .75rem' source='.button {}' />
            <CodePane lang='css' margin='0 0 .75rem' source='.button--primary {}' />
            <Appear><CodePane lang='css' margin='0 0 .75rem' source='.button--primary-when-next-to-an-article {}' /></Appear>
            <Appear><CodePane lang='css' source='.button--primary-move-to-the-left-dammit {}' /></Appear>
          </Slide>
          <Slide bgImage={images.why.replace('/', '')} />
          <Slide>
            <Heading fit>Verbose components,</Heading>
            <Heading fit>in many contexts</Heading>
          </Slide>
          <Slide>
            <Heading size={3}>It's not just CSS</Heading>
            <CodePane lang='html' margin='.75rem 0' source='<button class="button-primary" onClick={this.handleClick}>' />
            <CodePane lang='js' margin='0 0 .75rem' source='handleClick () => { console.log("Hi Button") }' />
          </Slide>
          <Slide bgImage={images.deadlines.replace('/', '')} bgDarken={0.5}>
            <Heading size={3} textColor='primary' >Deadlines</Heading>
          </Slide>
          <Slide>
            <Heading fit size={3}>This lead me to</Heading>
            <Appear><Heading fit size={3}>Atomic CSS…</Heading></Appear>
          </Slide>
          <Slide bgImage={images.gtfo.replace('/', '')} />
          <Slide>
            <CodePane lang='html' source={require('raw!../assets/acss.example')}/>
          </Slide>
          <Slide bgColor='dark'>
            <Heading textColor='primary' fit>Stuff I learned</Heading>
            <Heading textColor='primary' fit>writing Atomic CSS</Heading>
          </Slide>
          <Slide>
            <Heading fill>Start with a clean slate</Heading>
          </Slide>
          <Slide>
            <div style={{display: 'flex'}}>
              <Fit>
                <Heading size={6} textAlign='left' margin='0 0 1.5rem'>Normalise</Heading>
                <iframe style={{border: 0, minHeight: '15rem'}} src='http://127.0.0.1:8080/normalize/' />
              </Fit>
              <Appear>
                <Fit>
                  <Heading size={6} textAlign='left' margin='0 0 1.5rem'>Reset</Heading>
                  <iframe style={{border: 0, minHeight: '15rem'}} src='http://127.0.0.1:8080/reset/' />
                </Fit>
              </Appear>
              <Appear>
                <Fit>
                  <Heading size={6} textAlign='left' margin='0 0 1.5rem'>Inherit</Heading>
                  <iframe style={{border: 0, minHeight: '15rem'}} src='http://127.0.0.1:8080/inherit/' />
                </Fit>
              </Appear>
            </div>
          </Slide>
          <Slide>
            <CodePane lang='css' source={require('raw!../assets/bodyStyle.example')} />
          </Slide>
          <Slide>
            <div style={{display: 'flex'}}>
              <Fit>
                <Heading size={6} textAlign='left' margin='0 0 1.5rem'>Normalise</Heading>
                <iframe style={{border: 0, minHeight: '24rem'}} src='http://127.0.0.1:8080/normalizeStyled/' />
              </Fit>
              <Appear>
                <Fit>
                  <Heading size={6} textAlign='left' margin='0 0 1.5rem'>Reset</Heading>
                  <iframe style={{border: 0, minHeight: '15rem'}} src='http://127.0.0.1:8080/resetStyled/' />
                </Fit>
              </Appear>
              <Appear>
                <Fit>
                  <Heading size={6} textAlign='left' margin='0 0 1.5rem'>Inherit</Heading>
                  <iframe style={{border: 0, minHeight: '15rem'}} src='http://127.0.0.1:8080/inheritStyled/' />
                </Fit>
              </Appear>
            </div>
          </Slide>
          <Slide bgImage={images.youKeep.replace('/', '')} bgDarken='.5'>
            <Heading size={3} textColor='primary'>Semantics</Heading>
          </Slide>
          <Slide>
            <CodePane lang='css' source={require('raw!../assets/buttonLink.example')} />
            <Appear>
              <Fill>
                <iframe style={{border: 0, minHeight: '15rem', width: '100%', marginTop: '3rem'}}
                  src='http://127.0.0.1:8080/inheritButton/' />
              </Fill>
            </Appear>
          </Slide>
          <Slide>
            <Heading size={3}>Codify your design constraints</Heading>
            <Appear><Heading size={3} textColor='tertiary'>or “traits”</Heading></Appear>
          </Slide>
          <Slide>
            <List>
              <ListItem>spacing (margin, padding)</ListItem>
              <ListItem>colors</ListItem>
              <ListItem>type (scale, weight, measure)</ListItem>
              <ListItem>shadows (effects)</ListItem>
              <ListItem>z-index (named)</ListItem>
            </List>
          </Slide>
          <Slide>
            <List>
              <ListItem>StretchedBox</ListItem>
              <ListItem>Truncate</ListItem>
              <ListItem>CenterAllTheThings</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading>Avoid the cascade</Heading>
          </Slide>
          <Slide bgColor='dark'>
            <Heading size={6} textColor='tertiary' textAlign='left'>RE: The cascade & inheritance</Heading>
            <BlockQuote>
              <Quote>
                Fortunately, they aren’t very difficult to grasp
              </Quote>
              <Cite><span style={{display: 'inline-flex', alignItems: 'center'}}>
                <span style={{marginRight: '.75rem'}}>Love</span><Image src={images.w3c.replace('/', '')} />
              </span></Cite>
            </BlockQuote>
          </Slide>
          <Slide bgImage={images.doubleTake.replace('/', '')} />
          <Slide bgColor='dark'>
            <Image src={images.css.replace('/', '')} width='60%' />
          </Slide>
          <Slide>
            <Heading size={3}>Avoid overrides</Heading>
            <CodePane lang='css' source={require('raw!../assets/overrides.example')}/>
          </Slide>
          <Slide>
            <Heading textColor='secondary' size={5}>Possible Pain Points</Heading>
            <Heading size={3}>Pseudo Classes & Media Queries</Heading>
          </Slide>
          <Slide bgColor='dark'>
            <Heading size={3} fit textColor='primary'>Tiny design patterns vs…</Heading>
            <Appear><Heading size={3} fit textColor='primary'>Imperative styling</Heading></Appear>
          </Slide>
          <Slide bgImage={images.iKnowThis.replace('/', '')} />
          <Slide>
            <Heading fit>Your traits “Compose”</Heading>
          </Slide>
          <Slide>
            <Heading fit>You don’t abstract too early</Heading>
          </Slide>
          <Slide bgImage={images.nohi5.replace('/', '')} />
          <Slide bgImage={images.alot.replace('/', '')} bgDarken='.7'>
            <Heading fit textColor='primary'>“That’s a lot of classes…”</Heading>
          </Slide>
          <Slide bgImage={images.money.replace('/', '')} bgDarken='.5'>
            <Heading textColor='primary' size={3}>CSS #goals</Heading>
            <Appear><Heading textColor='primary' fit>Stop writing CSS</Heading></Appear>
          </Slide>
          <Slide bgImage={images.what.replace('/', '')} />
          <Slide bgImage={images.confucius.replace('/', '')} bgDarken='.75'>
            <Heading fit textColor='primary'>Minimising CSS,</Heading>
            <Heading fit textColor='primary'>Minimises CSS complexity</Heading>
          </Slide>
          <Slide>
            <Heading fit>How do we write</Heading>
            <Heading fit><span style={{textDecoration: 'line-through'}}>less</span> not as much CSS?</Heading>
          </Slide>
          <Slide>
            <Heading fit>Common CSS approach…</Heading>
          </Slide>
          <Slide bgImage={images.wookie.replace('/', '')} />
          <Slide>
            <Heading size={5}>And then…</Heading>
            <Appear>
              <CodePane lang='css' source={require('raw!../assets/badCSS.example')} />
            </Appear>
          </Slide>
          <Slide bgImage={images.itcrowd.replace('/', '')} />
          <Slide>
            <Heading>Examples</Heading>
          </Slide>
          <Slide>
            <iframe style={{border: 0, minHeight: '15rem', width: '100%'}}
              src='http://127.0.0.1:8080/examples/mui-material-ui-button' />
          </Slide>
          <Slide>
            <iframe style={{border: 0, minHeight: '15rem', width: '100%'}}
              src='http://127.0.0.1:8080/examples/minimal-css-button' />
          </Slide>
          <Slide>
            <iframe style={{border: 0, minHeight: '15rem', width: '100%'}}
              src='http://127.0.0.1:8080/examples/bootstrap-4-navbar' />
          </Slide>
          <Slide>
            <iframe style={{border: 0, minHeight: '15rem', width: '100%'}}
              src='http://127.0.0.1:8080/examples/minimal-css-navbar' />
          </Slide>
          <Slide bgColor='dark'>
            <Heading textColor='primary' fit>Designing systems</Heading>
          </Slide>
          <Slide>
            <Heading fit>1. Start with a clean base</Heading>
            <Text>Reset + Inherit</Text>
          </Slide>
          <Slide>
            <Heading fit>2. Use a traits library</Heading>
            <Text>Codify design patterns</Text>
          </Slide>
          <Slide>
            <Heading fit>3. Compose your traits</Heading>
            <Text>Using as little as possible</Text>
          </Slide>
          <Slide bgImage={images.slamdoor.replace('/', '')} bgDarken='.5'>
            <Heading textColor='primary' size={2}>“…this still sounds like Atomic CSS.”</Heading>
          </Slide>
          <Slide>
            <Heading fit>We have other solutions now</Heading>
            <List>
              <Appear><ListItem>CSS in JS (that creates CSS)</ListItem></Appear>
              <Appear><ListItem>CSS Modules</ListItem></Appear>
              <Appear><ListItem><span style={{textDecoration: 'line-through'}}>BEM with mixins</span></ListItem></Appear>
            </List>
          </Slide>
          {/*<Slide>
            <Heading fit>The best for us right now?</Heading>
            <Text>Hint: Composing class names is key</Text>
          </Slide>*/}
          <Slide bgImage={images.thepower.replace('/', '')} bgDarken='.6'>
            <Heading fit textColor='primary'>We have the power</Heading>
            <Appear><Heading size={6} textColor='primary' margin='3rem 0 0'>Thanks, @lukebrooker</Heading></Appear>
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}
