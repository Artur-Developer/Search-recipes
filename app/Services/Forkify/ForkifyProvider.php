<?php

namespace App\Services\Forkify;

use GuzzleHttp\Client;
use GuzzleHttp\RequestOptions;

use Illuminate\Support\Collection;

use function collect;
use function json_decode;

class ForkifyProvider
{
    private Client$client;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => 'https://forkify-api.herokuapp.com',
        ]);
    }

    /** @see https://forkify-api.herokuapp.com
     * @param int $recipeId
     *
     * @return array
     */
    public function getRecipe(int $recipeId): Collection
    {
        $uri = 'api/get';
        $options = [
            RequestOptions::QUERY => [
                'rId' => $recipeId,
            ],
        ];

        return $this->makeGetRequest($uri, $options);
    }

    /**
     * @param string $uri
     * @param array $options
     *
     * @return array
     */
    private function makeGetRequest(string $uri, array $options = []): Collection
    {
        $response = $this->client->get($uri, $options)->getBody()->getContents();

        return collect(json_decode($response, true));
    }

    /** @see https://forkify-api.herokuapp.com
     * @param string $queryText
     *
     * @return array
     */
    public function searchRecipe(string $queryText): Collection
    {
        $uri = 'api/search';
        $options = [
            RequestOptions::QUERY => [
                'q' => $queryText,
            ],
        ];

        return $this->makeGetRequest($uri, $options);
    }
}
