import { Notify } from 'notiflix/build/notiflix-notify-aio';

const notifyOptions = {
  opacity: 0.9,
  clickToClose: true,
  timeout: 2000,
  showOnlyTheLastOne: true,
  position: 'rright-top',
  fontSize: '18px',
  borderRadius: '5px',
};
const notifyOptionsERR = {
  opacity: 0.9,
  clickToClose: true,
  timeout: 1000,
  showOnlyTheLastOne: true,
  position: 'right-top',
  fontSize: '18px',
  borderRadius: '5px',
};

export default function dataFoundAlert(data) {
  if (data.totalHits == 0) {
    Notify.warning(
      'Sorry, there are no images matching your search query. Please try again.)',
      notifyOptionsERR
    );
    throw new Error('data is 0 items');
  } else {
    Notify.success(`Hooray! We found ${data.totalHits} images.`, notifyOptions);
  }
}
