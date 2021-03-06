import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpRequestsService } from './article.service';
import { UtilitiesService } from './utilities.service';
import { asyncData, asyncError } from '../testing/async-observable-helpers';
import { NewsTopHeadlinesModel } from '../models/newsTopHeadlines.model';

describe('ArticleService', () => {
  let article: HttpRequestsService;
  let util: jasmine.SpyObj<UtilitiesService>;
  let http: jasmine.SpyObj<HttpClient>;
  const utilSpy = jasmine.createSpyObj('UtilitiesService', ['formatDate']);
  const httpSpy = jasmine.createSpyObj('HttpClient', ['get']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpRequestsService,
        { provide: UtilitiesService, useValue: utilSpy },
        { provide: HttpClient, useValue: httpSpy }
      ]
    });
    article = TestBed.get(HttpRequestsService);
    http = TestBed.get(HttpClient);
    util = TestBed.get(UtilitiesService);
  });

  it('should be created', () => {
    expect(article).toBeTruthy();
  });

  it('should return expected articles (HttpClient called once)', () => {
    const expectedArticles: NewsTopHeadlinesModel = {
      status: 'ok',
      totalResults: 0,
      articles: []
    };
    http.get.and.returnValue(asyncData(expectedArticles));
    article
      .requestArticle()
      .subscribe(
        response =>
          expect(response.status).toEqual(
            expectedArticles.status,
            'status is ok'
          ),
        fail
      );
    expect(http.get.calls.count()).toBe(1, 'one call for http request');
    expect(util.formatDate.calls.count()).toBe(1, 'one call to format date');
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });

    http.get.and.returnValue(asyncError(errorResponse));

    article
      .requestArticle()
      .subscribe(
        response => fail('expected an error, not heroes'),
        error => expect(error.status).toEqual(404)
      );
    expect(http.get.calls.count()).toBe(2, 'one call for http request');
    expect(util.formatDate.calls.count()).toBe(2, 'one call to format date');
  });
});
