local AlphabetSet = {
    "a", "b","c", "d", "e",
    "f", 'g', "h", "i", "j","k", "l",
    "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"
}

local SpeicalSet = {
    "/", ":", ";", ")", "("
}

local Sets = {
    AlphabetSet, SpeicalSet, {0,1,2,3,4,5,6,7,8,9}
}


local function generatePassword(size)
    local String = ""
    local lastCharacter = ""
    for i = 1, size, 1 do
        local randomSet = math.random(1, 3)
        local SetToChooseFrom = Sets[randomSet]
                
        String = String..SetToChooseFrom[math.random(1, #SetToChooseFrom)]
    end

    return String
end
--[[print(generatePassword(200), "\n") 
print(generatePassword(200), "\n") 
print(generatePassword(200), "\n")]]
