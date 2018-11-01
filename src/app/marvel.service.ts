import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, flatMap, toArray } from 'rxjs/operators';

export interface CharacterItem {
    id: number;
    name: string;
}

export interface Character {
    id: number;
    name: string;
    description: string;
    image: string;
}

@Injectable()
export class MarvelService {
    constructor(private http: HttpClient,
        @Inject('appKey') private appKey) { }

    getCharacterList(): Promise<CharacterItem[]> {
        const params = new HttpParams()
            .set('limit', 20 + '')
            .set('apikey', this.appKey);
        return (
            this.http.get<CharacterItem[]>('https://gateway.marvel.com:443/v1/public/characters', { params })
                .pipe(
                    map(v => v['data']['results']),
                    flatMap(v => v),
                    map((v: any) => {
                        return (<CharacterItem>{ id: v.id, name: v.name });
                    }),
                    toArray()
                )
                .toPromise()
        )
    }
    getCharacter(id: number): Promise<Character> {
        const params = new HttpParams()
            .set('apikey', this.appKey);
        return (
            this.http.get<Character>(`https://gateway.marvel.com:443/v1/public/characters/${id}`, { params })
                .pipe(
                    map(v => v['data']['results'][0]),
                    map((v: any) => {
                        return (<Character>{
                            id: v.id,
                            name: v.name,
                            description: v.descripton || 'No description',
                            image: `${v.thumbnail.path}.${v.thumbnail.extension}`
                        })
                    })
                )
                .toPromise()
        );
    }
}