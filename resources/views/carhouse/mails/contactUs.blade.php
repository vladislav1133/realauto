<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Offer</title>
</head>
<body>

<p><b>Телефон:</b> {{ $tel }}</p>
<p><b>Почта:</b> {{ $name }}</p>
<p><b>Сообщение:</b> {{$mess}}</p>


@if($favoriteCars)
    <p><b>Избранные:</b></p>

    <ul>
    @foreach($favoriteCars as $car)
        <li>lot: {{$car}}</li>
    @endforeach
    </ul>

@endif
</body>
</html>