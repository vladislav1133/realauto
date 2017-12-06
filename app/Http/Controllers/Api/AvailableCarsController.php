<?php

namespace App\Http\Controllers\Api;

use App\Repositories\AvailableCarRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AvailableCarsController extends Controller
{
    protected $availableCarRepository;

    public function __construct(AvailableCarRepository $availableCarRepository)
    {
        $this->availableCarRepository = $availableCarRepository;
    }

    public function getModels($mark){

        $models = $this->availableCarRepository->getModels($mark);

        dd($models);
    }
}
