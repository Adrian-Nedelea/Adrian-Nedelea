using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

public interface IRezultatRepos {
    Task InsertRezultat (RezultatEntity rezultat);
}