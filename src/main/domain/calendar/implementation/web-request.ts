import axios from 'axios';
import InvalidRequestError from '../app/exceptions/invalid-request-error';
import BadRequestError from '../app/exceptions/bad-request-error';
import EmptyResponseError from '../app/exceptions/empty-response-error';
import logger from '../../utils/logger';
import { WebRequestAdapter } from '../app/adapter/web-request-adapter';
import EventDto from './dto/event-dto';


class WebRequest implements WebRequestAdapter {
  async get(url: string): Promise<EventDto[]> {
    logger.info({ event: 'WebRequest.get', details: 'Process started', url });
    const response = await axios.get(url, { headers: { 'Content-Type': 'application/json' } }).then((response) => {
      if (response.status === 400) {
        logger.error({ event: 'WebRequest.get', details: 'Process error, status: 400' });
        throw new InvalidRequestError(response.data);
      }

      if (response.status === 500) {
        logger.error({ event: 'WebRequest.get', details: 'Process error, status: 500' });
        throw new BadRequestError(response.data);
      }

      return response;
    });

    if (!response || !response.data) {
      logger.error({ event: 'WebRequest.get', details: 'Process error, empty response' });
      throw new EmptyResponseError('Empty Response');
    }

    logger.info({ event: 'WebRequest.get', details: 'Process finished', response: response.data });
    return response.data;
  }
}

export default new WebRequest();
