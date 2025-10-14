import {createFileRoute} from '@tanstack/react-router'
import { useState } from 'react';
import { Ghost, Skull, Zap, ExternalLink } from 'lucide-react';

type Episode = {
    season: number;
    episode: number;
    title: string;
    romanNumeral: string;
    year: number;
    url?: string;
}

const treehouseEpisodes : Episode[] = [
    { season: 2, episode: 3, title: "Treehouse of Horror", romanNumeral: "I", year: 1990, url: "https://www.disneyplus.com/es-419/play/e7b385fe-ec23-491c-93bb-e2cbc2dc8f10" },
    { season: 3, episode: 6, title: "Treehouse of Horror II", romanNumeral: "II", year: 1991, url: "https://www.disneyplus.com/es-419/play/dca71177-218c-48b3-ae3f-872450a41cb3" },
    { season: 4, episode: 5, title: "Treehouse of Horror III", romanNumeral: "III", year: 1992, url: "https://www.disneyplus.com/es-419/play/142453dc-a6e6-430d-96fe-6bcfa0b7c228" },
    { season: 5, episode: 5, title: "Treehouse of Horror IV", romanNumeral: "IV", year: 1993, url: "https://www.disneyplus.com/es-419/play/930db0aa-62a5-4a3d-8dd0-ef600b5dc516" },
    { season: 6, episode: 6, title: "Treehouse of Horror V", romanNumeral: "V", year: 1994, url: "https://www.disneyplus.com/es-419/play/00ebda11-c48f-45ee-b031-a52e9de5a20e" },
    { season: 7, episode: 6, title: "Treehouse of Horror VI", romanNumeral: "VI", year: 1995, url: "https://www.disneyplus.com/es-419/play/0b9658e2-05ec-48aa-b32e-1a7660bc8d64" },
    { season: 8, episode: 1, title: "Treehouse of Horror VII", romanNumeral: "VII", year: 1996, url: "https://www.disneyplus.com/es-419/play/46269d62-c1e4-4d89-bbdb-2adc9dedc283" },
    { season: 9, episode: 5, title: "Treehouse of Horror VIII", romanNumeral: "VIII", year: 1997, url: "https://www.disneyplus.com/es-419/play/24c83fdd-2b42-4310-a88f-c8fa932756c9" },
    { season: 10, episode: 4, title: "Treehouse of Horror IX", romanNumeral: "IX", year: 1998, url: "https://www.disneyplus.com/es-419/play/017c768f-236c-4644-8b2d-9b775704cc85" },
    { season: 11, episode: 4, title: "Treehouse of Horror X", romanNumeral: "X", year: 1999, url: "https://www.disneyplus.com/es-419/play/2d2168ba-d77e-47cd-b2e2-d28267850689" },
    { season: 12, episode: 1, title: "Treehouse of Horror XI", romanNumeral: "XI", year: 2000, url: "https://www.disneyplus.com/es-419/play/c09e15a4-7f84-4230-aade-41bb52d736ab" },
    { season: 13, episode: 1, title: "Treehouse of Horror XII", romanNumeral: "XII", year: 2001, url: "https://www.disneyplus.com/es-419/play/7da69f00-885b-4a3c-b206-6a18a7b5f77d" },
    { season: 14, episode: 1, title: "Treehouse of Horror XIII", romanNumeral: "XIII", year: 2002, url: "https://www.disneyplus.com/es-419/play/a7e17732-d6d3-4222-bbe2-ae948fdd2eb8" },
    { season: 15, episode: 1, title: "Treehouse of Horror XIV", romanNumeral: "XIV", year: 2003, url: "https://www.disneyplus.com/es-419/play/a7b1ae80-1ff8-4c28-b44b-f6baab79867b"},
    { season: 16, episode: 1, title: "Treehouse of Horror XV", romanNumeral: "XV", year: 2004, url: "https://www.disneyplus.com/es-419/play/c429b0e4-1b04-412a-8a91-cfc895957778" },
    { season: 17, episode: 4, title: "Treehouse of Horror XVI", romanNumeral: "XVI", year: 2005, url: "https://www.disneyplus.com/es-419/play/2917ad0f-df92-4d6b-9e14-93b48f62dd6c" },
    { season: 18, episode: 4, title: "Treehouse of Horror XVII", romanNumeral: "XVII", year: 2006, url: "https://www.disneyplus.com/es-419/play/48867d0e-466d-4571-b354-de36e1dc4367" },
    { season: 19, episode: 5, title: "Treehouse of Horror XVIII", romanNumeral: "XVIII", year: 2007, url: "https://www.disneyplus.com/es-419/play/d63b842e-1ec3-4f23-afc0-73c6df3829df" },
    { season: 20, episode: 4, title: "Treehouse of Horror XIX", romanNumeral: "XIX", year: 2008, url: "https://www.disneyplus.com/es-419/play/a3641f1e-706c-4536-8bba-5f518f6108df" },
    { season: 21, episode: 4, title: "Treehouse of Horror XX", romanNumeral: "XX", year: 2009, url: "https://www.disneyplus.com/es-419/play/43105934-836d-44d5-a326-7de73c5c643b" },
    { season: 22, episode: 4, title: "Treehouse of Horror XXI", romanNumeral: "XXI", year: 2010, url: "https://www.disneyplus.com/es-419/play/c59ba97e-30ac-4505-8f9d-f81a6c650ed8" },
    { season: 23, episode: 3, title: "Treehouse of Horror XXII", romanNumeral: "XXII", year: 2011, url: "https://www.disneyplus.com/es-419/play/a046e2fb-cb73-4e2e-8273-773cb4e658da" },
    { season: 24, episode: 2, title: "Treehouse of Horror XXIII", romanNumeral: "XXIII", year: 2012, url: "https://www.disneyplus.com/es-419/play/ef15a22a-5b19-4040-8407-08c3bfef9924" },
    { season: 25, episode: 2, title: "Treehouse of Horror XXIV", romanNumeral: "XXIV", year: 2013, url: "https://www.disneyplus.com/es-419/play/5b8b1fc4-bbd0-4e35-abc3-47deee5a8780" },
    { season: 26, episode: 4, title: "Treehouse of Horror XXV", romanNumeral: "XXV", year: 2014, url: "https://www.disneyplus.com/es-419/play/03520dbb-7647-4532-bf8b-daedd7f7e60f" },
    { season: 27, episode: 4, title: "Treehouse of Horror XXVI", romanNumeral: "XXVI", year: 2015, url: "https://www.disneyplus.com/es-419/play/b592fa3f-fd15-4fcc-91af-a03c682299bb" },
    { season: 28, episode: 4, title: "Treehouse of Horror XXVII", romanNumeral: "XXVII", year: 2016, url: "https://www.disneyplus.com/es-419/play/386e8572-7b7d-4391-9775-6a5caeb7f3d1" },
    { season: 29, episode: 4, title: "Treehouse of Horror XXVIII", romanNumeral: "XXVIII", year: 2017, url: "https://www.disneyplus.com/es-419/play/f7afb747-ca04-43f5-86a4-1fb49ac87992" },
    { season: 30, episode: 4, title: "Treehouse of Horror XXIX", romanNumeral: "XXIX", year: 2018, url: "https://www.disneyplus.com/es-419/play/2a843004-24b9-495c-84aa-9fe95761d405" },
    { season: 31, episode: 4, title: "Treehouse of Horror XXX", romanNumeral: "XXX", year: 2019, url: "https://www.disneyplus.com/es-419/play/9a4ed8fe-cefc-486b-9d12-9c08281584b5" },
    { season: 32, episode: 4, title: "Treehouse of Horror XXXI", romanNumeral: "XXXI", year: 2020, url: "https://www.disneyplus.com/es-419/play/7c61ce77-1364-458a-900b-8dae4b0d2702" },
    { season: 33, episode: 3, title: "Treehouse of Horror XXXII", romanNumeral: "XXXII", year: 2021, url: "https://www.disneyplus.com/es-419/play/2155f21e-b707-4d78-bdba-8f8f1856841a" },
    { season: 34, episode: 6, title: "Treehouse of Horror XXXIII", romanNumeral: "XXXIII", year: 2022, url: "https://www.disneyplus.com/es-419/play/db2fd468-0f83-42bc-a943-f898cf119ae3" },
    { season: 35, episode: 5, title: "Treehouse of Horror XXXIV", romanNumeral: "XXXIV", year: 2023, url: "https://www.disneyplus.com/es-419/play/78d7fb8c-dd2f-4fde-8257-0944ca3a01d2" },
    { season: 36, episode: 5, title: "Treehouse of Horror XXXV", romanNumeral: "XXXV", year: 2024, url: "https://www.disneyplus.com/es-419/play/a0a9c906-5fb3-44f0-9e03-71083d816ff5" }
];

export const Route = createFileRoute('/')({
    component: App,
})

const getDisneyPlusUrl = (episode: Episode): string => {
    // Disney+ usa un formato específico para Los Simpsons
    return episode.url? episode.url : `https://www.disneyplus.com/video/${generateEpisodeId(episode.season, episode.episode)}`;
};

const generateEpisodeId = (season: number, episode: number): string => {
    const paddedSeason = String(season).padStart(2, '0');
    const paddedEpisode = String(episode).padStart(2, '0');
    return `simpsons-s${paddedSeason}e${paddedEpisode}`;
};

function App() {
    const [selectedEpisode, setSelectedEpisode] = useState<Episode|null>(null);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const getRandomEpisode = () => {
        setIsAnimating(true);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * treehouseEpisodes.length);
            setSelectedEpisode(treehouseEpisodes[randomIndex]);
            setIsAnimating(false);
        }, 500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white">
            <header className="bg-black/50 backdrop-blur-sm border-b border-purple-500/30 py-6">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center gap-3">
                        <Ghost className="w-10 h-10 text-purple-400 animate-pulse" />
                        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            The Simpsons Treehouse of Horror
                        </h1>
                        <Skull className="w-10 h-10 text-purple-400 animate-pulse" />
                    </div>
                    <p className="text-center text-purple-300 mt-2">
                        Just for Evans
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                <div className="max-w-2xl mx-auto">
                    {/* Random Button */}
                    <div className="text-center mb-12">
                        <button
                            onClick={getRandomEpisode}
                            disabled={isAnimating}
                            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold text-xl shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <span className="flex items-center gap-3">
                            <Zap className={`w-6 h-6 ${isAnimating ? 'animate-spin' : ''}`} />
                              {isAnimating ? 'Buscando...' : 'Episodio Random'}
                              <Zap className={`w-6 h-6 ${isAnimating ? 'animate-spin' : ''}`} />
                          </span>
                        </button>
                    </div>

                    {/* Episode Card */}
                    {selectedEpisode && (
                        <div className={`bg-gradient-to-br from-purple-800/40 to-pink-800/40 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-500/50 shadow-2xl transform transition-all duration-500 ${
                            isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
                        }`}>
                            {/* Episode Number Badge */}
                            <div className="flex justify-center mb-6">
                                <div className="bg-black/60 rounded-full px-6 py-2 border-2 border-purple-400">
                                  <span className="text-3xl font-bold text-purple-300">
                                    {selectedEpisode.romanNumeral}
                                  </span>
                                </div>
                            </div>

                            {/* Episode Info */}
                            <div className="text-center space-y-4">
                                <h2 className="text-3xl font-bold text-purple-100">
                                    {selectedEpisode.title}
                                </h2>

                                <div className="flex justify-center gap-6 text-purple-300">
                                    <div className="flex flex-col items-center">
                                        <span className="text-sm opacity-70">Temporada</span>
                                        <span className="text-2xl font-bold">{selectedEpisode.season}</span>
                                    </div>
                                    <div className="w-px bg-purple-500/30"></div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-sm opacity-70">Episodio</span>
                                        <span className="text-2xl font-bold">{selectedEpisode.episode}</span>
                                    </div>
                                    <div className="w-px bg-purple-500/30"></div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-sm opacity-70">Año</span>
                                        <span className="text-2xl font-bold">{selectedEpisode.year}</span>
                                    </div>
                                </div>

                                {/* Disney+ Button */}
                                <div className="pt-6">
                                    <a
                                        href={getDisneyPlusUrl(selectedEpisode)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        Ver en Disney+
                                    </a>
                                    <p className="text-sm text-purple-300 mt-3 opacity-70">
                                        Busca: Temporada {selectedEpisode.season}, Episodio {selectedEpisode.episode}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Instructions */}
                    {!selectedEpisode && (
                        <div className="text-center text-purple-300 space-y-4">
                            <p className="text-lg">
                                👻 Haz clic en el botón para obtener un episodio random de La Casita del Terror
                            </p>
                            <p className="text-sm opacity-70">
                                {treehouseEpisodes.length} episodios disponibles desde 1990 hasta 2024
                            </p>
                        </div>
                    )}

                    {/* Stats */}
                    <div className="mt-12 grid grid-cols-3 gap-4 text-center">
                        <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/30">
                            <div className="text-3xl font-bold text-purple-300">{treehouseEpisodes.length}</div>
                            <div className="text-sm text-purple-400 mt-1">Episodios</div>
                        </div>
                        <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/30">
                            <div className="text-3xl font-bold text-purple-300">35</div>
                            <div className="text-sm text-purple-400 mt-1">Años</div>
                        </div>
                        <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/30">
                            <div className="text-3xl font-bold text-purple-300">3</div>
                            <div className="text-sm text-purple-400 mt-1">Segmentos</div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="mt-12 py-6 text-center text-purple-400 text-sm border-t border-purple-500/30">
                <p>🎃 Treehouse of Horror • Los Simpsons • Disney+ 👻</p>
            </footer>
        </div>
    )
}
