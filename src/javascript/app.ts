import { getFighters } from './services/fightersService'
import { createFighters } from './fightersView';
import { IFighter } from './interfaces/IFighter';

// const rootElement = document.getElementById('root');
// const loadingElement = document.getElementById('loading-overlay');

class App{
  constructor(){
    this.startApp();
  }
  static rootElement = document.getElementById('root');
  static loadingElement = document.getElementById('loading-overlay');
  
  async startApp() {
    if(App.loadingElement && App.rootElement) {
      try {
        App.loadingElement.style.visibility = 'visible';
        
        const fighters = await getFighters();
        const fightersElement = createFighters(fighters as IFighter[]);

        App.rootElement.appendChild(fightersElement);
      } catch (error) {
        console.warn(error);
        App.rootElement.innerText = 'Failed to load data';
      } finally {
        App.loadingElement.style.visibility = 'hidden';
      }
    }
  }
}
export default App;


