
// element 118 electron configuration.
// we can calculate the electron valence of any element using this string.
// 1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6

g_compounds =
{
  "CO"     : {formula:"CO",    name:"Carbon Monoxide"},
  "COO"    : {formula:"CO2",   name:"Carbon Dioxide"},
  "HHOO"   : {formula:"H2O2",  name:"Hydrogen Peroxide"},
  "CHHHH"  : {formula:"CH4",   name:"Methane"},
  "CHHHHO" : {formula:"CH3OH", name:"Propane"},
  "HHO"    : {formula:"H2O",   name:"Water"}
};

// match compound from array of atomic symbols (H,He,etc)
function matchCompound(atoms)
{
  var key = atoms.sort().join('');

  for (var k in g_compounds)
  {
    if (g_compounds.hasOwnProperty(k))
    {
      if (k == key)
      {
        return g_compounds[k];
      }
    }
  }

  return null;
}
