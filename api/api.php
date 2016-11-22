<?php

$uri = explode('/', $_SERVER['REQUEST_URI']);

$count = $uri[count($uri) - 1];

if ($count > 100000) {
    echo json_encode(['message' => 'sorry, we\'re not that crazy']);
    return;
}

$found = 0;
$current = 2;
while ($found < $count) {
    if (isPrime($current)) {
        $found++;
    }
    $current++;
}

echo json_encode(['result' => $current - 1, 'server' => gethostname()]);

function isPrime($num)
{
    // 1 is not prime. See: http://en.wikipedia.org/wiki/Prime_number#Primality_of_one
    if ($num == 1) {
        return false;
    }

    // 2 is prime (the only even number that is prime)
    if ($num == 2) {
        return true;
    }

    /**
     * If the number is divisible by two, then it's not prime and it's no longer
     * needed to check other even numbers
     */
    if ($num % 2 == 0) {
        return false;
    }

    /**
     * Checks the odd numbers. If any of them is a factor, then it returns false.
     * The sqrt can be an approximation, hence just for the sake of
     * security, one rounds it to the next highest integer value.
     */
    $ceil = ceil(sqrt($num));
    for ($i = 3; $i <= $ceil; $i = $i + 2) {
        if ($num % $i == 0) {
            return false;
        }
    }

    return true;
}