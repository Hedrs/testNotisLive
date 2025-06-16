import { Page as NotFound } from './404/index.page';

function Page({ is404 }: { is404: boolean }) {
  return (
    <div className="p-8 text-center">
      <h1>{is404 ? <NotFound /> : 'Error'}</h1>
      <p>Please, checked URL or try again later</p>
    </div>
  );
}

export { Page };
