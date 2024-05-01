import './Projects.scss'
import img from '../../assets/Rectangle 44.png';

export function Projects() {
  
    return (
      <>
      <h1 id="projects"></h1>
      <section className='container-projects'>
      <h2 className='title'>Nossos Projetos</h2>
        <div className='fil-1'>
          <div className='proj-1'>
            <img src={img}  className='img'/>
            <h1 className='title-div'>Nome do Projeto</h1>
            <h1 className='txt-div'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in quam dapibus, consequat urna scelerisque, tempor est. Sed tempor auctor nisl, feugiat interdum velit hendrerit ut. </h1>
            <h1 className='txt-click'>Click Here →</h1>
            <div class="back">
              <p>Descrição do Projeto 1</p>
            </div>
          </div>
          <div className='proj-2'>
            <div className='front'>
              <img src={img} className='img'/>
              <h1 className='title-div'>Nome do Projeto</h1>
              <h1 className='txt-div'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in quam dapibus, consequat urna scelerisque, tempor est. Sed tempor auctor nisl, feugiat interdum velit hendrerit ut. </h1>
              <h1 className='txt-click'>Click Here →</h1>
            </div>
            <div class="back">
              <p>Descrição do Projeto 1</p>
            </div>
          </div>
        </div>
        <div className='fil-2'>
        <div className='proj-3'>
             <div className='front'>
                <img src={img} className='img'/>
                <h1 className='title-div'>Nome do Projeto</h1>
                <h1 className='txt-div'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in quam dapibus, consequat urna scelerisque, tempor est. Sed tempor auctor nisl, feugiat interdum velit hendrerit ut. </h1>
                <h1 className='txt-click'>Click Here →</h1>
              </div>
              <div class="back">
              <p>Descrição do Projeto 1</p>
            </div>
          </div>
          <div className='proj-4'>
            <div className='front'>
                <img src={img} className='img'/>
                <h1 className='title-div'>Nome do Projeto</h1>
                <h1 className='txt-div'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in quam dapibus, consequat urna scelerisque, tempor est. Sed tempor auctor nisl, feugiat interdum velit hendrerit ut. </h1>
                <h1 className='txt-click'>Click Here →</h1>
              </div>
              <div class="back">
              <p>Descrição do Projeto 1</p>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}